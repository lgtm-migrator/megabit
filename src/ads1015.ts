import Device from "@chirimen/ads1015";
import { ReadableDevice } from "./Device";
import { I2C, i2c } from "./i2c";

export function ads1015(
  bus: I2C = i2c(),
  address: number = 0x48,
  channel: 0 | 1 | 2 | 3 = 0
): ReadableDevice<number> {
  const device = new Device(bus, address);

  return {
    async read(): Promise<number> {
      if (device.i2cSlave == null) await device.init();
      return device.read(channel);
    }
  };
}

export default ads1015;
