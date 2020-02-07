import Device from "@chirimen/grove-accelerometer";
import { ReadableDevice } from "./Device";
import { I2C, i2c } from "./i2c";

/** @type Acceleration (g) */
type Acceleration = [number, number, number];

export function adxl345(
  bus: I2C = i2c(),
  address: number = 0x53
): ReadableDevice<Acceleration> {
  const device = new Device(bus, address);

  return {
    async read(): Promise<Acceleration> {
      if (device.i2cSlave == null) await device.init();
      const acc = await device.read();
      return [acc.x, acc.y, acc.z];
    }
  };
}

export default adxl345;
