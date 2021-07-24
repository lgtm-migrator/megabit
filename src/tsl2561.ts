import Device from "@chirimen/grove-light";
import { ReadableDevice } from "./Device";
import { I2C, i2c } from "./i2c";

/** Illuminance (lx) */
export type Illuminance = number;

export function tsl2561(
  bus: I2C = i2c(),
  address: number = 0x29
): ReadableDevice<Illuminance> {
  const device = new Device(bus, address);

  return {
    async read(): Promise<Illuminance> {
      if (device.i2cSlave == null) await device.init();
      return device.read();
    },
  };
}

export default tsl2561;
