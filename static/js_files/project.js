document.addEventListener('DOMContentLoaded', function() {
    // Function to show the modal
    function showModal(event) {
      event.preventDefault(); // Prevent the default link behavior
      const link = event.currentTarget;
      const modal = document.getElementById('accessTokenModal');
  
      // Set the href of the link as a data attribute on the modal for later use
      modal.dataset.href = link.getAttribute('href');
  
      // Display the modal
      modal.style.display = 'block';
    }
  
    // Function to check the entered token
    window.checkToken = function() {
      const tokenInputValue = document.getElementById('tokenInput').value;
      const modal = document.getElementById('accessTokenModal');
      const href = modal.dataset.href;
  
      // Passwords for the links
      const passwordForFirstLink = 'dontshowoff';
      const passwordForOtherLinks = 'Kap@1947';
  
      // Check the password based on the href of the link
      if (href.endsWith("university.html") && tokenInputValue === passwordForFirstLink) {
        window.location.href = href;
      } else if ((href.endsWith("python.html") || href.endsWith("private_proj.html")) && tokenInputValue === passwordForOtherLinks) {
        window.location.href = href;
      } else {
        alert('Access denied!');
        closeModal();
      }
    };
  
    // Function to close the modal
    function closeModal() {
      document.getElementById('accessTokenModal').style.display = 'none';
    }
  
    // Add event listeners to each link
    const links = document.querySelectorAll('.diamond-link');
    links.forEach(link => {
      link.addEventListener('click', showModal);
    });
  
    // Close the modal if clicked outside of it
    window.onclick = function(event) {
      if (event.target == document.getElementById('accessTokenModal')) {
        closeModal();
      }
    };
  });
  