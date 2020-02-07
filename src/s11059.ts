import Device from "@chirimen/s11059";
import { ReadableDevice } from "./Device";
import { I2C, i2c } from "./i2c";

/** @type 8-bit RGB */
type RGB = [number, number, number];

export function s11059(
  bus: I2C = i2c(),
  address: number = 0x2a
): ReadableDevice<RGB> {
  const device = new Device(bus, address);

  return {
    async read(): Promise<RGB> {
      if (device.i2cSlave == null) await device.init();
      return device.readR8G8B8();
    }
  };
}

export default s11059;
