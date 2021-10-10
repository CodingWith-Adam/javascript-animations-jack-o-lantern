export default function img(file) {
  const image = new Image();
  image.src = "images/" + file;
  return image;
}
