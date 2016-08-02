# read-image-data

Read [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) from a
[Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob).

```JavaScript
import readImageData from 'read-image-data';

document.getElementById('file-input').addEventListener('change', (e) => {
  readImageData(e.target.files[0]).then((imageData) => {
    console.log(imageData);
  });
});
```

### Reference

* [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData)
* [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
* [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
* [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)
