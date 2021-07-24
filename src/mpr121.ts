import Device from "@chirimen/grove-touch";
import { ReadableDevice } from "./Device";
import { I2C, i2c } from "./i2c";

/** true if touched by the finger, false otherwise */
export type Touched = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean
];

export function mpr121(
  bus: I2C = i2c(),
  address: number = 0x5a
): ReadableDevice<Touched> {
  const device = new Device(bus, address);

  return {
    async read(): Promise<Touched> {
      if (device.i2cSlave == null) await device.init();
      return device.read();
    },
  };
}

export default mpr121;
