export function getDuration(duration) {
  let minutes = Number((duration / 60000).toFixed(0));
  let seconds = Number(((duration % 60000) / 1000).toFixed(0));
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
}

export function getHashParams() {
  let hashParams = {};
  let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}
