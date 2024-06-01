const path = require('path');
const fs = require('fs');
const rst = require('rotating-file-stream');

// Ensure log directory exists (handle potential errors)
const logDir = path.join(__dirname, '../logs');
try {
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }
} catch (err) {
  console.error('Error creating log directory:', err);
}

// Create rotating log streams for access and error logs
const accessLogStream = rst.createStream('access.log', {
  interval: '1d',
  path: logDir
});

const development = {
  morgan:{
    mode:'dev',
    options:{
        stream:accessLogStream,
    }
}
}

const production = {
  morgan:{
    mode:'combined',
    options:{
        stream:accessLogStream,
    }
}
}
module.exports = eval(process.env.Pro_ENVIRONMENT) == undefined ? development : eval(process.env.Pro_ENVIRONMENT);