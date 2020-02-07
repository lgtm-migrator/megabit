import Device from "@chirimen/pca9685";
import { WritableDevice } from "./Device";
import { I2CPort, i2c } from "./i2c";

type Channel =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;

/**
 * @param minPulse sec
 * @param maxPulse sec
 * @param angleRange deg
 */
export function pca9685(
  bus: I2CPort = i2c(),
  address: number = 0x40,
  channel: Channel = 0,
  minPulse?: number,
  maxPulse?: number,
  angleRange?: number
): WritableDevice<number> {
  const device = new Device(bus, address);

  return {
    /** @param angle deg */
    async write(angle: number): Promise<void> {
      if (device.i2cSlave == null) {
        await device.init(minPulse, maxPulse, angleRange, false);
      }

      await device.setServo(channel, angle);
    }
  };
}

export default pca9685;
