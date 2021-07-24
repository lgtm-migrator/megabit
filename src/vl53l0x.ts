import Device from "@chirimen/vl53l0x";
import { ReadableDevice } from "./Device";
import { I2C, i2c } from "./i2c";

/** @type Enable long range mode (max 2200mm) */
type EnableLongRangeMode = Boolean;

/** @type Distance (mm) */
type Distance = number;

/** max 1200 mm / 2200 mm (long range mode) */
export function vl53l0x(
  bus: I2C = i2c(),
  address: number = 0x29,
  enableLongRangeMode?: EnableLongRangeMode
): ReadableDevice<Distance> {
  const device = new Device(bus, address);

  return {
    async read(): Promise<Distance> {
      if (device.i2cSlave == null) await device.init(enableLongRangeMode);
      return device.getRange();
    },
  };
}

export default vl53l0x;
