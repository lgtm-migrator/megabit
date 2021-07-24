import Device from "@chirimen/grove-gesture";
import { ReadableDevice } from "./Device";
import { I2C, i2c } from "./i2c";

type Direction =
  | ""
  | "right"
  | "left"
  | "up"
  | "down"
  | "forward"
  | "back"
  | "clockwise"
  | "counterclockwise";

export function paj7620(
  bus: I2C = i2c(),
  address: number = 0x73
): ReadableDevice<Direction> {
  const device = new Device(bus, address);

  return {
    async read(): Promise<Direction> {
      if (device.i2cSlave == null) await device.init();
      const direction = await device.read();
      switch (direction) {
        case "right":
        case "left":
        case "up":
        case "down":
        case "forward":
        case "back":
        case "clockwise":
          return direction;
        case "count clockwise":
          return "counterclockwise";
        default:
          return "";
      }
    },
  };
}

export default paj7620;
