import Device from "@chirimen/grove-oled-display";
import { WritableDevice } from "./Device";
import { I2C, i2c } from "./i2c";

export function ssd1306(
  bus: I2C = i2c(),
  address: number = 0x3c
): WritableDevice<boolean | number | string> {
  const device = new Device(bus, address);

  return {
    /** @param value Object to be output */
    async write(value: boolean | number | string): Promise<void> {
      if (device.i2cSlave == null) {
        await device.init(true);
      }
      await device.clearDisplay();
      const messages =
        typeof value === "string"
          ? value.split("\n")
          : JSON.stringify(value, null, "  ").split("\n");
      messages.forEach((message, index) => {
        device.drawStringQ(index, 0, message);
      });
      await device.playSequence();
    }
  };
}

export default ssd1306;
