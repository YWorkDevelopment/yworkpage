export function random(): number {
  return Math.floor(Math.random() * 90000 + 10000) + new Date().getTime();
}
