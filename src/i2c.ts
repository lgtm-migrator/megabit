import { I2CPort, I2CSlaveDevice, requestI2CAccess } from "node-web-i2c";

export { I2CPort, I2CSlaveDevice, requestI2CAccess };

export function i2c(bus: number = 1) {
  return new I2CPort(bus);
}

export default i2c;
