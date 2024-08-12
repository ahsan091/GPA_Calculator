// Function to create and show the modal
function showModal(imgSrc, altText) {
    // Create the modal container if it doesn't exist
    let modal = document.getElementById('imgModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'imgModal';
      modal.style.display = 'none';
      modal.style.position = 'fixed';
      modal.style.zIndex = '1000';
      modal.style.left = '0';
      modal.style.top = '0';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = 'center';
      modal.style.display = 'flex';
      document.body.appendChild(modal);
  
      // Create the image element
      const modalImg = document.createElement('img');
      modalImg.id = 'fullSizeImg';
      modalImg.style.maxWidth = '100%';
      modalImg.style.maxHeight = '100%';
      modal.appendChild(modalImg);
  
      // Close modal on click
      modal.onclick = function () {
        modal.style.display = 'none';
        modalImg.src = '';
      };
    }
  
    // Set image source and display modal
    const fullSizeImg = document.getElementById('fullSizeImg');
    fullSizeImg.src = imgSrc;
    fullSizeImg.alt = altText;
    modal.style.display = 'flex';
  }
  
  // Function to initialize the image click events
  function initializeImageClicks() {
    // Get all images on the page
    const images = document.getElementsByTagName('img');
    for (let img of images) {
      // Add click event to each image
      img.onclick = function () {
        showModal(img.src, img.alt);
      };
    }
  }
  
  // Initialize the click events when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initializeImageClicks);
  