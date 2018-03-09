export function createSrcset(images) {
  var srcset = "";
  if (images) {
    if (images.medium) {
      srcset = `${images.medium} 1200w`
    }
    if  (images.large) {
      srcset += `${images.medium ? ", " : ""}${images.large} 1920w`;
    }
  }

  return srcset;
}
