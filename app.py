from flask import Flask, render_template, request, redirect, url_for, flash
app = Flask(__name__)
@app.route('/')
def main_page():
    return render_template('GPA_Calc.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/blogs')
def blogs():
    return render_template('blogs.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')

@app.route('/terms')
def terms():
    return render_template('terms.html')

@app.route('/disclaimer')
def disclaimer():
    return render_template('disclaimer.html')

@app.route('/generate_fields', methods=['POST'])
def generate_fields():
    num_semester = int(request.form.get('numSemester'))
    num_courses = int(request.form.get('numCourses'))
    if 1 <= num_courses <= 7:
        return render_template('Generate_Fields.html', num_courses=num_courses, num_semester=num_semester)
    else:
        flash('Please Enter Valid Number of Courses (1-7).')
        return redirect(url_for('main_page'))

@app.route('/calculations', methods=['POST'])
def calculations():
    cgpa = 0.0
    gpa = 0.0
    qp = 0.0
    ch = 0.0
    t_sem_gpa = 0.0
    num_courses = int(request.form.get('numCourse'))
    num_semester = int(request.form.get('numSemester'))
    gpa_semester = request.form.getlist('gpa_semester')
    grades = request.form.getlist('grades')
    credits = request.form.getlist('courses')

    for grade, credit in zip(grades, credits):
        credit = float(credit)
        ch += credit
        if grade == 'A': qp += 4.00 * credit
        elif grade == 'A-': qp += 3.67 * credit
        elif grade == 'B+': qp += 3.33 * credit
        elif grade == 'B': qp += 3.00 * credit
        elif grade == 'B-': qp += 2.67 * credit
        elif grade == 'C+': qp += 2.33 * credit
        elif grade == 'C': qp += 2.00 * credit
        elif grade == 'C-': qp += 1.67 * credit
        elif grade == 'D+': qp += 1.33 * credit
        elif grade == 'D': qp += 1.00 * credit
        else: qp += 0.00

    for semester in gpa_semester:
        t_sem_gpa += float(semester)

    gpa = qp / ch
    cgpa = t_sem_gpa / (num_semester - 1)

    return render_template('Generate_Fields.html', num_courses=num_courses, num_semester=num_semester, grades=grades , credits=credits, gpa=gpa, cgpa=cgpa ,zip=zip)

if __name__ == '__main__':
    app.run(debug=True)