// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const images = ['images/football star.jpg', 'images/football 1.jpg']; // Array of image paths
    let currentIndex = 0; // Index to keep track of the current image

    const mainImage = document.getElementById('mainImage');
    const changeImageButton = document.getElementById('changeImageButton');

    // Function to change the image
    function changeImage() {
        mainImage.src = images[currentIndex]; // Set the source of the image to the current index in the array
        currentIndex = (currentIndex + 1) % images.length; // Increment index and loop back to 0 when reaching the end
    }

    // Add event listener to the button
    changeImageButton.addEventListener('click', changeImage);
});
