function newImage(src) {
    let img = document.createElement("img");
    img.src = src;
    img.style.position = 'absolute';
    document.body.append(img);
    return img
  }