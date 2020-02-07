import {
  GPIOPort,
  OperationError,
  InvalidAccessError,
  requestGPIOAccess
} from "node-web-gpio";

export { OperationError, InvalidAccessError, requestGPIOAccess };
export type GPIOValue = 0 | 1;

export class GPIO extends GPIOPort {
  async read(): Promise<GPIOValue> {
    try {
      if (!(this.exported && this.direction === "in")) {
        throw new OperationError(`direction must be "in"`);
      }
    } catch (error) {
      if (error instanceof OperationError) await this.export("in");
      else throw error;
    }

    return super.read();
  }

  async write(value: GPIOValue): Promise<void> {
    try {
      if (!(this.exported && this.direction === "out")) {
        throw new OperationError(`direction must be "out"`);
      }
    } catch (error) {
      if (error instanceof OperationError) await this.export("out");
      else throw error;
    }

    return super.write(value);
  }
}

export function gpio(pin: number) {
  return new GPIO(pin);
}

export default gpio;
