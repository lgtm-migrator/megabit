import Device from "@chirimen/adt7410";
import { ReadableDevice } from "./Device";
import { I2CPort, i2c } from "./i2c";

/** @type Temperature (°C) */
type Temperature = number;

export function adt7410(
  bus: I2CPort = i2c(),
  address: number = 0x48
): ReadableDevice<number> {
  const device = new Device(bus, address);

  return {
    async read(): Promise<Temperature> {
      if (device.i2cSlave == null) await device.init();
      return device.read();
    }
  };
}

export default adt7410;
