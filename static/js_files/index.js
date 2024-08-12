document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('audioToggle').addEventListener('change', function() {
        var video = document.getElementById('background-video');
        video.volume = 0.25;
        video.muted = !video.muted;
    });

    const welcomeText = document.getElementById('welcome-text-content');
    const texts = [
        "Welcome to CyberBurgs!",
        "Network Pentesting!",
        "Application Pentesting!",
        "Website Pentesting!"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let timer;

    function displayNextChar() {
        if (charIndex < texts[textIndex].length) {
            welcomeText.innerHTML += escapeHTML(texts[textIndex].charAt(charIndex));
            charIndex++;
            timer = setTimeout(displayNextChar, 90);
        } else {
            clearTimeout(timer);
            setTimeout(() => {
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                welcomeText.innerHTML = '';
                displayNextChar();
            }, 1000);
        }
    }

    function escapeHTML(str) {
        return str.replace(/[&<>"']/g, function (match) {
            const escapeChars = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            };
            return escapeChars[match];
        });
    }

    displayNextChar();
});