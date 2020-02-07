import { I2CPort, I2CSlaveDevice, requestI2CAccess } from "node-web-i2c";

export { I2CSlaveDevice, requestI2CAccess };

export class I2C extends I2CPort {}

export function i2c(bus: number = 1) {
  return new I2C(bus);
}

export default i2c;
