export function crc1(values: ArrayLike<number>): number {
  let crc: number = 0;
  for (let i: number = 0; i < values.length; i++) {
    crc = (crc + values[i]) & 0xff;
  }
  return crc;
}
