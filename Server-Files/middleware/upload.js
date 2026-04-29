const multer = require("multer");
const path = require("path");

// use memory storage
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // allow only: jpeg, jpg, png, webp, gif (check both extname and mimetype)
  // cb(null, true) if valid, cb(new Error(...)) if invalid
};

const upload = multer({
  storage,
  fileFilter,
  // limit fileSize to 10MB
});

module.exports = upload;