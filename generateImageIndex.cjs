// generateImageIndex.js
const fs = require('fs');
const path = require('path');

// Path to your public images folder
const imagesDir = path.join(__dirname, 'public', 'gallery');

// Output JSON file path
const outputPath = path.join(imagesDir, 'index.json');

// Allowed image extensions
const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.JPG'];

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error reading images directory:', err);
    return;
  }

  // Filter image files only
  const imageFiles = files.filter(file => validExtensions.includes(path.extname(file).toLowerCase()));

  // Write the array to index.json
  fs.writeFile(outputPath, JSON.stringify(imageFiles, null, 2), (err) => {
    if (err) {
      console.error('Error writing index.json:', err);
    } else {
      console.log(`✅ index.json created with ${imageFiles.length} images.`);
    }
  });
});

