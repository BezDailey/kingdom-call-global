const fs = require('fs');
const path = require('path');

// === CONFIGURATION ===
const githubUsername = 'BezDailey';
const repoName = 'kingdom-call-global';
const branch = 'main';
const subfolder = 'public-gallery'; // Folder where your images live

// Local folder path (relative to this script)
const imagesDir = path.join(__dirname, subfolder);

// Output JSON path (in your deployed public folder)
const outputPath = path.join(__dirname, 'public', 'gallery', 'index.json');

// Valid image file extensions
const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.JPG'];

// Generate jsDelivr base URL
const cdnBase = `https://cdn.jsdelivr.net/gh/${githubUsername}/${repoName}@${branch}/${subfolder}/`;

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('❌ Error reading image directory:', err);
    return;
  }

  // Filter for valid image files
  const imageFiles = files.filter(file =>
    validExtensions.includes(path.extname(file).toLowerCase())
  );

  // Generate full jsDelivr URLs
  const imageUrls = imageFiles.map(file => cdnBase + encodeURIComponent(file));

  // Write to index.json
  fs.writeFile(outputPath, JSON.stringify(imageUrls, null, 2), err => {
    if (err) {
      console.error('❌ Error writing index.json:', err);
    } else {
      console.log(`✅ index.json created with ${imageUrls.length} CDN URLs.`);
    }
  });
});
