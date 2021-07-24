import Device from "@chirimen/veml6070";
import { ReadableDevice } from "./Device";
import { I2C, i2c } from "./i2c";

/** UVA (μW/cm^2) */
export type UVA = number;

/** slave addresses are 0x38 and 0x39 */
export function veml6070(bus: I2C = i2c()): ReadableDevice<number> {
  const device = new Device(bus);

  return {
    async read(): Promise<UVA> {
      if (device.i2cSlaveLSB == null || device.i2cSlaveMSB == null)
        await device.init();
      return device.read();
    },
  };
}

export default veml6070;
