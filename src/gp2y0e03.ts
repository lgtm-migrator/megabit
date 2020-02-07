import Device from "@chirimen/gp2y0e03";
import { ReadableDevice } from "./Device";
import { I2CPort, i2c } from "./i2c";

/** @type Distance (cm) */
type Distance = number;

export function gp2y0e03(
  bus: I2CPort = i2c(),
  address: number = 0x40
): ReadableDevice<number> {
  const device = new Device(bus, address);

  return {
    async read(): Promise<Distance> {
      if (device.i2cSlave == null) await device.init();
      return device.read();
    }
  };
}

export default gp2y0e03;
