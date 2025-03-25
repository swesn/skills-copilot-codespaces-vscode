// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// The comments.html file should be served on the root URL.
// The comments.html file should be served with the correct content type.
// The comments.html file should be served with the correct status code.
// The comments.html file should be served with the correct content.
// The comments.html file should be served with the correct content length.
// The comments.html file should be served with the correct headers.

const http = require('http');
const fs = require('fs');
const path = require('path');