// scripts.js

document.addEventListener'DOMContentLoaded', function() 
    // Select the button and the section to toggle
    const toggleButton = document.getElementById('toggleButton');
    const aboutSection = document.getElementById('about');
	const images = ['images/football star.jpg', 'images/football 1.jpg']; // Array of image paths
    let currentIndex = 0; // Index to keep track of the current image

    const mainImage = document.getElementById('mainImage');
    const changeImageButton = document.getElementById('changeImageButton');
