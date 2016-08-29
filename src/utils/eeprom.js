import Immutable from 'immutable';

const firmwareVersion = 10;

const defaultEEPROM = [
  1, 1, 350, 44, 0, 2, 1, 1, 350, 4, 0, 2, 1, 1, 350, 14, 0, 2,
  1, 1, 350, 24, 0, 2, 1, 1, 350, 54, 1, 2, 1, 1, 0, 230, 0, 0,
  1, 1, 70, 230, 0, 0, 1, 1, 200, 230, 0, 0, 1, 1, 280, 230, 0, 0,
  1, 2, 0, 230, 0, 0, 1, 2, 70, 230, 0, 0, 1, 2, 200, 230, 0, 0,
  1, 2, 280, 230, 0, 0, 1, 1, 350, 220, 0, 2, 1, 2, 5, 10, 0, 0,
  1, 1, 350, 1, 0, 1, 2, 5, 40, 0, 0, 1, 1, 10, 0, 0, 1,
  1, 1, 285, 202, 1, 1, 40, 14, 0, 0, 1, 1, 40, 24, 0, 0, 1,
  2, 15, 0, 0, 30, 35, 20, 25, 25, 1, 1, 0, 1, 2, 0, 3, 1, 6,
  1200, 1, 7, 1200, 180, 25, 1, 1, 1, 1, 20, 0, 2, 0, 100, 0, 10,
  0, 1000, 1, 1, 5, 220, 0, 0, 1, 70, 220, 0, 0, 0, 255, 0, 0, 1,
  2, 10, 100, 0, 0, 180, 133, 1, 0, 180, 133, 1, 0, 40, 0, 0,
  firmwareVersion, 1, 133, 133, 1, 1, 350, 34, 0, 2, 1, 1, 350, 210,
  0, 2, 0, 1, 4, 120, 1, 0, 0, 1, 2, 5, 25, 0, 0, 1, 1, 2, 5, 55,
  0, 0, 0, 1, 7, 1, 1, 1, 350, 200, 0, 2, 1, 1,
  0, 0, 200, 220, 0, 0, 5, 1000, 2000, 0, 0, 0, 200, 200,
  1, 1, 15, 15, 1, 1, 184, 240, 0, 0, 1, 1, 264, 240, 0, 0,
];

function toEnabled(byte) {
  return byte > 0 ? 1 : 0;
}

function fromSign(byte, value) {
  return byte > 0 ? value : -value;
}

function toSign(value) {
  return value > 0 ? 1 : 0;
}

function fromFraction(byte, value) {
  return (value || 0) + (byte / 10);
}

function toFraction(value) {
  return Math.floor((value - Math.floor(value)) * 10);
}

function fromReal(byte, value) {
  return (value || 0) + byte;
}

function toReal(value) {
  return Math.floor(value);
}

const eepromMapping = [
  { path: ['armState', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['armState', 'visibleOn'] },
  { path: ['armState', 'positionX'] },
  { path: ['armState', 'positionY'] },
  { path: ['armState', 'fontSize'] },
  { path: ['armState', 'hAlignment'] },
  { path: ['batteryVoltage', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['batteryVoltage', 'visibleOn'] },
  { path: ['batteryVoltage', 'positionX'] },
  { path: ['batteryVoltage', 'positionY'] },
  { path: ['batteryVoltage', 'fontSize'] },
  { path: ['batteryVoltage', 'hAlignment'] },
  { path: ['batteryCurrent', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['batteryCurrent', 'visibleOn'] },
  { path: ['batteryCurrent', 'positionX'] },
  { path: ['batteryCurrent', 'positionY'] },
  { path: ['batteryCurrent', 'fontSize'] },
  { path: ['batteryCurrent', 'hAlignment'] },
  { path: ['batteryRemaining', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['batteryRemaining', 'visibleOn'] },
  { path: ['batteryRemaining', 'positionX'] },
  { path: ['batteryRemaining', 'positionY'] },
  { path: ['batteryRemaining', 'fontSize'] },
  { path: ['batteryRemaining', 'hAlignment'] },
  { path: ['flightMode', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['flightMode', 'visibleOn'] },
  { path: ['flightMode', 'positionX'] },
  { path: ['flightMode', 'positionY'] },
  { path: ['flightMode', 'fontSize'] },
  { path: ['flightMode', 'hAlignment'] },
  { path: ['gpsStatus', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['gpsStatus', 'visibleOn'] },
  { path: ['gpsStatus', 'positionX'] },
  { path: ['gpsStatus', 'positionY'] },
  { path: ['gpsStatus', 'fontSize'] },
  { path: ['gpsStatus', 'hAlignment'] },
  { path: ['gpsHdop', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['gpsHdop', 'visibleOn'] },
  { path: ['gpsHdop', 'positionX'] },
  { path: ['gpsHdop', 'positionY'] },
  { path: ['gpsHdop', 'fontSize'] },
  { path: ['gpsHdop', 'hAlignment'] },
  { path: ['gpsLatitude', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['gpsLatitude', 'visibleOn'] },
  { path: ['gpsLatitude', 'positionX'] },
  { path: ['gpsLatitude', 'positionY'] },
  { path: ['gpsLatitude', 'fontSize'] },
  { path: ['gpsLatitude', 'hAlignment'] },
  { path: ['gpsLongitude', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['gpsLongitude', 'visibleOn'] },
  { path: ['gpsLongitude', 'positionX'] },
  { path: ['gpsLongitude', 'positionY'] },
  { path: ['gpsLongitude', 'fontSize'] },
  { path: ['gpsLongitude', 'hAlignment'] },
  { path: ['gps2Status', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['gps2Status', 'visibleOn'] },
  { path: ['gps2Status', 'positionX'] },
  { path: ['gps2Status', 'positionY'] },
  { path: ['gps2Status', 'fontSize'] },
  { path: ['gps2Status', 'hAlignment'] },
  { path: ['gps2Hdop', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['gps2Hdop', 'visibleOn'] },
  { path: ['gps2Hdop', 'positionX'] },
  { path: ['gps2Hdop', 'positionY'] },
  { path: ['gps2Hdop', 'fontSize'] },
  { path: ['gps2Hdop', 'hAlignment'] },
  { path: ['gps2Latitude', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['gps2Latitude', 'visibleOn'] },
  { path: ['gps2Latitude', 'positionX'] },
  { path: ['gps2Latitude', 'positionY'] },
  { path: ['gps2Latitude', 'fontSize'] },
  { path: ['gps2Latitude', 'hAlignment'] },
  { path: ['gps2Longitude', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['gps2Longitude', 'visibleOn'] },
  { path: ['gps2Longitude', 'positionX'] },
  { path: ['gps2Longitude', 'positionY'] },
  { path: ['gps2Longitude', 'fontSize'] },
  { path: ['gps2Longitude', 'hAlignment'] },
  { path: ['time', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['time', 'visibleOn'] },
  { path: ['time', 'positionX'] },
  { path: ['time', 'positionY'] },
  { path: ['time', 'fontSize'] },
  { path: ['time', 'hAlignment'] },
  { path: ['absoluteAltitude', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['absoluteAltitude', 'visibleOn'] },
  { path: ['absoluteAltitude', 'positionX'] },
  { path: ['absoluteAltitude', 'positionY'] },
  { path: ['absoluteAltitude', 'fontSize'] },
  { path: ['absoluteAltitude', 'hAlignment'] },
  { path: ['altitudeScale', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['altitudeScale', 'visibleOn'] },
  { path: ['altitudeScale', 'positionX'] },
  { path: ['altitudeScale', 'scaleAlignment'] },
  { path: ['altitudeScale', 'scaleType'] },
  { path: ['speedGround', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['speedGround', 'visibleOn'] },
  { path: ['speedGround', 'positionX'] },
  { path: ['speedGround', 'positionY'] },
  { path: ['speedGround', 'fontSize'] },
  { path: ['speedGround', 'hAlignment'] },
  { path: ['speedScale', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['speedScale', 'visibleOn'] },
  { path: ['speedScale', 'positionX'] },
  { path: ['speedScale', 'scaleAlignment'] },
  { path: ['speedScale', 'scaleType'] },
  { path: ['throttle', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['throttle', 'visibleOn'] },
  { path: ['throttle', 'scaleEnabled'] },
  { path: ['throttle', 'positionX'] },
  { path: ['throttle', 'positionY'] },
  { path: ['homeDistance', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['homeDistance', 'visibleOn'] },
  { path: ['homeDistance', 'positionX'] },
  { path: ['homeDistance', 'positionY'] },
  { path: ['homeDistance', 'fontSize'] },
  { path: ['homeDistance', 'hAlignment'] },
  { path: ['wpDistance', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['wpDistance', 'visibleOn'] },
  { path: ['wpDistance', 'positionX'] },
  { path: ['wpDistance', 'positionY'] },
  { path: ['wpDistance', 'fontSize'] },
  { path: ['wpDistance', 'hAlignment'] },
  { path: ['compass', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['compass', 'visibleOn'] },
  { path: ['compass', 'positionY'] },
  { path: ['radar', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['radar', 'visibleOn'] },
  { path: ['radar', 'positionX'] },
  { path: ['radar', 'positionY'] },
  { path: ['radar', 'radius'] },
  { path: ['radar', 'homeRadius'] },
  { path: ['radar', 'wpRadius'] },
  { path: ['artificialHorizont', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['artificialHorizont', 'visibleOn'] },
  { path: ['artificialHorizont', 'mode'] },
  { path: ['attitude3d', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['attitude3d', 'visibleOn'] },
  { path: ['video', 'units'] },
  { path: ['video', 'maxPanels'] },
  { path: ['switching', 'videoChannel'],
    convertFromParameters: toEnabled },
  { path: ['switching', 'videoChannel'] },
  { path: ['switching', 'videoValue'] },
  { path: ['switching', 'panelChannel'],
    convertFromParameters: toEnabled },
  { path: ['switching', 'panelChannel'] },
  { path: ['switching', 'panelValue'] },
  { path: ['alarms', 'positionX'] },
  { path: ['alarms', 'positionY'] },
  { path: ['alarms', 'fontSize'] },
  { path: ['alarms', 'hAlignment'] },
  { path: ['alarms', 'gpsStatusEnabled'] },
  { path: ['alarms', 'lowBatteryEnabled'] },
  { path: ['alarms', 'lowBatteryValue'] },
  { path: ['alarms', 'underSpeedEnabled'] },
  { path: ['alarms', 'underSpeedValue'] },
  { path: ['alarms', 'overSpeedEnabled'] },
  { path: ['alarms', 'overSpeedValue'] },
  { path: ['alarms', 'underAltEnabled'] },
  { path: ['alarms', 'underAltValue'] },
  { path: ['alarms', 'overAltEnabled'] },
  { path: ['alarms', 'overAltValue'] },
  { path: ['climbRate', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['climbRate', 'visibleOn'] },
  { path: ['climbRate', 'positionX'] },
  { path: ['climbRate', 'positionY'] },
  { path: ['climbRate', 'fontSize'] },
  { path: ['rssi', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['rssi', 'visibleOn'] },
  { path: ['rssi', 'positionX'] },
  { path: ['rssi', 'positionY'] },
  { path: ['rssi', 'fontSize'] },
  { path: ['rssi', 'hAlignment'] },
  { path: ['rssi', 'min'] },
  { path: ['rssi', 'max'] },
  { path: ['rssi', 'raw'] },
  { path: ['serial', 'fcType'] },
  { path: ['wind', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['wind', 'visibleOn'] },
  { path: ['wind', 'positionX'] },
  { path: ['wind', 'positionY'] },
  { path: ['time', 'type'] },
  { path: ['throttle', 'scaleType'] },
  { path: ['artificialHorizont', 'positionX'] },
  { path: ['artificialHorizont', 'positionY'] },
  { path: ['artificialHorizont', 'scale'],
    convertToParameters: fromReal,
    convertFromParameters: toReal },
  { path: ['artificialHorizont', 'scale'],
    convertToParameters: fromFraction,
    convertFromParameters: toFraction },
  { path: ['attitude3d', 'positionX'] },
  { path: ['attitude3d', 'positionY'] },
  { path: ['attitude3d', 'scale'],
    convertToParameters: fromReal,
      convertFromParameters: toReal },
  { path: ['attitude3d', 'scale'],
    convertToParameters: fromFraction,
    convertFromParameters: toFraction },
  { path: ['attitude3d', 'mapRadius'] },
  { path: ['video', 'offsetY'] },
  { path: ['video', 'offsetX'] },
  { path: ['serial', 'version'] },
  { path: ['video', 'videoMode'] },
  { path: ['speedScale', 'positionY'] },
  { path: ['altitudeScale', 'positionY'] },
  { path: ['batteryConsumed', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['batteryConsumed', 'visibleOn'] },
  { path: ['batteryConsumed', 'positionX'] },
  { path: ['batteryConsumed', 'positionY'] },
  { path: ['batteryConsumed', 'fontSize'] },
  { path: ['batteryConsumed', 'hAlignment'] },
  { path: ['totalTrip', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['totalTrip', 'visibleOn'] },
  { path: ['totalTrip', 'positionX'] },
  { path: ['totalTrip', 'positionY'] },
  { path: ['totalTrip', 'fontSize'] },
  { path: ['totalTrip', 'hAlignment'] },
  { path: ['rssi', 'type'] },
  { path: ['map', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['map', 'visibleOn'] },
  { path: ['map', 'radius'] },
  { path: ['map', 'fontSize'] },
  { path: ['map', 'hAlignment'] },
  { path: ['map', 'vAlignment'] },
  { path: ['relativeAltitude', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['relativeAltitude', 'visibleOn'] },
  { path: ['relativeAltitude', 'positionX'] },
  { path: ['relativeAltitude', 'positionY'] },
  { path: ['relativeAltitude', 'fontSize'] },
  { path: ['relativeAltitude', 'hAlignment'] },
  { path: ['altitudeScale', 'scaleType'] },
  { path: ['speedAir', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['speedAir', 'visibleOn'] },
  { path: ['speedAir', 'positionX'] },
  { path: ['speedAir', 'positionY'] },
  { path: ['speedAir', 'fontSize'] },
  { path: ['speedAir', 'hAlignment'] },
  { path: ['speedScale', 'scaleType'] },
  { path: ['video', 'offsetX'],
    convertToParameters: fromSign,
    convertFromParameters: toSign },
  { path: ['serial', 'baudRate'] },
  { path: ['artificialHorizont', 'type'] },
  { path: ['efficiency', 'visibleOn'] },
  { path: ['efficiency', 'visibleOn'] },
  { path: ['efficiency', 'positionX'] },
  { path: ['efficiency', 'positionY'] },
  { path: ['efficiency', 'fontSize'] },
  { path: ['efficiency', 'hAlignment'] },
  { path: ['switching', 'videoMode'] },
  { path: ['switching', 'panelMode'] },
  { path: ['linkQuality', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['linkQuality', 'visibleOn'] },
  { path: ['linkQuality', 'positionX'] },
  { path: ['linkQuality', 'positionY'] },
  { path: ['linkQuality', 'fontSize'] },
  { path: ['linkQuality', 'hAlignment'] },
  { path: ['linkQuality', 'type'] },
  { path: ['linkQuality', 'min'] },
  { path: ['linkQuality', 'max'] },
  { path: ['linkQuality', 'raw'] },
  { path: ['varioGraph', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['varioGraph', 'visibleOn'] },
  { path: ['varioGraph', 'positionX'] },
  { path: ['varioGraph', 'positionY'] },
  { path: ['homeDirection', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['homeDirection', 'visibleOn'] },
  { path: ['homeDirection', 'positionX'] },
  { path: ['homeDirection', 'positionY'] },
  { path: ['homeLatitude', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['homeLatitude', 'visibleOn'] },
  { path: ['homeLatitude', 'positionX'] },
  { path: ['homeLatitude', 'positionY'] },
  { path: ['homeLatitude', 'fontSize'] },
  { path: ['homeLatitude', 'hAlignment'] },
  { path: ['homeLongitude', 'visibleOn'],
    convertFromParameters: toEnabled },
  { path: ['homeLongitude', 'visibleOn'] },
  { path: ['homeLongitude', 'positionX'] },
  { path: ['homeLongitude', 'positionY'] },
  { path: ['homeLongitude', 'fontSize'] },
  { path: ['homeLongitude', 'hAlignment'] },
];

const skeletonParameters = {
  alarms: {},
  altitudeAbsolute: {},
  relativeAltitude: {},
  altitudeScale: {},
  armState: {},
  attitude3d: {},
  artificialHorizont: {},
  batteryConsumed: {},
  batteryCurrent: {},
  batteryRemaining: {},
  batteryVoltage: {},
  climbRate: {},
  compass: {},
  firmware: {},
  flightMode: {},
  gps2Hdop: {},
  gps2Latitude: {},
  gps2Longitude: {},
  gps2Status: {},
  homeLatitude: {},
  homeLongitude: {},
  gpsHdop: {},
  gpsLatitude: {},
  gpsLongitude: {},
  gpsStatus: {},
  homeDirection: {},
  homeDistance: {},
  linkQuality: {},
  map: {},
  preview: {},
  pwmPanel: {},
  pwmVideo: {},
  radar: {},
  rssi: {},
  serial: {},
  speedAir: {},
  speedGround: {},
  speedScale: {},
  throttle: {},
  time: {},
  totalTrip: {},
  video: {},
  wind: {},
  wpDistance: {},
};

export function toParameters(eepromData) {
  return eepromData.reduce((state, byte, index) => {
    const mapping = eepromMapping[index];
    if (!mapping) {
      return state;
    }
    const converter = mapping.convertToParameters ? mapping.convertToParameters : (x) => x;
    return state.updateIn(mapping.path, (value) => converter(byte, value));
  }, Immutable.fromJS(skeletonParameters));
}

export function fromParameters(parameters) {
  const eepromData = eepromMapping.map((mapping) => {
    const converter = mapping.convertFromParameters ? mapping.convertFromParameters : (x) => x;
    return converter(parameters.getIn(mapping.path));
  });

  // the eeprom is expected to be 1024bytes long, fill with zeros
  // keep in mind we are storing uint16 here so 2 bytes per item
  for (let i = eepromData.length; i < 512; i++) {
    eepromData.push(0);
  }

  return eepromData;
}

export default {
  defaultEEPROM,
  fromParameters,
  toParameters,
};
