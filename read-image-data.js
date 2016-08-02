function readImageData(imageBlob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onabort = reject;
    reader.onerror = reject;
    reader.onload = (fileLoadEvent) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, img.width, img.height);
          const data = ctx.getImageData(0, 0, canvas.width, canvas.height);

          resolve(data);
        } catch (err) {
          reject(err);
        }
      };
      img.src = fileLoadEvent.target.result;
    };
    reader.readAsDataURL(imageBlob);
  });
}

export default readImageData;
