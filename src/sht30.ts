import Device from "@chirimen/sht30";
import { ReadableDevice } from "./Device";
import { I2C, i2c } from "./i2c";

/** @type Humidity (%) */
type Humidity = number;

/** @type Temperature (°C) */
type Temperature = number;

/** @type Values */
type Values = {
  humidity: Humidity;
  temperature: Temperature;
};

export function sht30(
  bus: I2C = i2c(),
  address: number = 0x44
): ReadableDevice<Values> {
  const device = new Device(bus, address);

  return {
    async read(): Promise<Values> {
      if (device.i2cSlave == null) await device.init();
      return await device.readData();
    },
  };
}

export default sht30;
