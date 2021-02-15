const {Transform} = require('stream');
const os = require('os');

class LineSplitStream extends Transform {
  constructor(options) {
    super(options);
    this.accum = '';
  }

  _transform(chunk, encoding, callback) {
    const chunkString = chunk.toString();
    const separator = os.EOL;

    this.accum += chunkString;
    if (this.accum.includes(separator)) {
      const splittedLines = this.accum.split(separator);

      this.accum = splittedLines.pop();
      splittedLines.forEach((data) => {
        this.push(data);
      });
    }

    callback();
  }

  _flush(callback) {
    if (this.accum) {
      this.push(this.accum);
    }
    callback();
  }
}

module.exports = LineSplitStream;
