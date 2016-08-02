const readImageData = require('read-image-data');
const testImage = require('file!test/test_image.png');

// Helper to load file from a URL
const getFile = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.onerror = reject;
    xhr.onload = () => resolve(xhr.response);
    xhr.send();
  });
};

describe('read-image-data', function() {

  var blob;

  before(function() {
    return getFile(testImage).then((response) => blob = response);
  });

  it('reads correct data', function() {
    return readImageData(blob)
      .then((imageData) => {

        // Check size
        expect(imageData.height).to.equal(4);
        expect(imageData.width).to.equal(4);
        expect(imageData.data).to.have.length(16 * 4);

        // Top left is red
        expect(Array.prototype.slice.call(imageData.data, 0, (0 * 4) + 4))
          .to.eql([255, 0, 0, 255]);

        // Top right is green
        expect(Array.prototype.slice.call(imageData.data, 3 * 4, (3 * 4) + 4))
          .to.eql([0, 255, 0, 255]);

        // Bottom left is blue
        expect(Array.prototype.slice.call(imageData.data, 12 * 4, (12 * 4) + 4))
          .to.eql([0, 0, 255, 255]);

        // Bottom right is yellow
        expect(Array.prototype.slice.call(imageData.data, 14 * 4, (14 * 4) + 4))
          .to.eql([255, 255, 0, 255]);

      });
  });
});
