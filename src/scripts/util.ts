export function random(): number {
  return Math.floor(Math.random() * 90000 + 10000) + new Date().getTime();
}

export function getImgStyle(e: React.SyntheticEvent<HTMLImageElement>) {
  e.target["parentNode"].style.lineHeight =
    e.target["parentNode"].offsetHeight + "px";
}
