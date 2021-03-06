/* eslint max-len: 0 */

const shape = [
  [0x0, 0x0, 0x38, 0x7c, 0xfe, 0xfe, 0xfe, 0x7c, 0x38, 0x38, 0x7c, 0xfe, 0x0, 0x0, 0x0], // GPS
  [0x0, 0x0, 0x0, 0x38, 0x7c, 0xfe, 0xfe, 0xfe, 0x7c, 0x38, 0x0, 0x0, 0x0, 0x0, 0x0], // HDOP
  [0x0, 0x0, 0x0, 0x38, 0x7c, 0xfe, 0xfe, 0xfe, 0x7c, 0x38, 0x0, 0x0, 0x0, 0x0, 0x0], // TIME
  [0xf8, 0xf8, 0xfe, 0xff, 0xff, 0xef, 0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0xe0, 0x0], // WP_DISTANCE
  [0x7e, 0xff, 0xfe, 0x70, 0x70, 0x38, 0x1c, 0x1c, 0x38, 0x70, 0x70, 0xfe, 0xff, 0x7e], // TOTAL_TRIP
  [0xe0, 0xe0, 0xe0, 0xf8, 0xf8, 0xf8, 0xf8, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe], // RSSI
  [0x10, 0x38, 0x38, 0x7c, 0x1fe, 0x7c, 0x38, 0x38, 0x38, 0x38, 0x38, 0x38, 0x38, 0x10], // LINK_QUALITY
  [0x0, 0x0, 0x0, 0x24, 0x7e, 0xff, 0xff, 0xff, 0x7e, 0x24, 0x0, 0x0, 0x0, 0x0], // HOME_DISTANCE
];

const outline = [
  [0x0, 0x0, 0xc7, 0xbb, 0x7d, 0x6d, 0x7d, 0xbb, 0xc7, 0xd7, 0xbb, 0x1, 0x0, 0x0], // GPS
  [0x0, 0x0, 0x0, 0xc7, 0xab, 0x6d, 0x1, 0x6d, 0xab, 0xc7, 0x0, 0x0, 0x0, 0x0], // HDOP
  [0x0, 0x0, 0x0, 0xc7, 0xab, 0x6d, 0x61, 0x7d, 0xbb, 0xc7, 0x0, 0x0, 0x0, 0x0], // TIME
  [0x7, 0x57, 0x51, 0x54, 0x45, 0x50, 0x5f, 0x5f, 0x5f, 0x5f, 0x5f, 0x5f, 0x5f, 0x1f], // WP_DISTANCE
  [0x81, 0x7e, 0x41, 0xaf, 0xaf, 0xd7, 0xeb, 0xeb, 0xd7, 0xaf, 0xaf, 0x41, 0x7e, 0x81], // TOTAL_TRIP
  [0x1f, 0x5f, 0x5f, 0x47, 0x57, 0x57, 0x57, 0x51, 0x55, 0x55, 0x55, 0x55, 0x55, 0x0], // RSSI
  [0xee, 0xd6, 0xd6, 0x92, 0x55, 0xba, 0xd6, 0xd6, 0xd6, 0xd6, 0xd6, 0xd6, 0xd6, 0xee], // LINK_QUALITY
  [0x80, 0x80, 0x80, 0xdb, 0xa5, 0x42, 0x7e, 0x42, 0xa5, 0xdb, 0x80, 0x80, 0x80, 0x80], // HOME_DISTANCE
];

const dimensions = { width: 8, height: 14 };

function getData(index) {
  return { shape: shape[index], outline: outline[index].map((b) => (~b >>> 0) & Math.pow(2, dimensions.width) - 1) };
}

export default { dimensions, getData };
