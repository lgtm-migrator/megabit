# Megabit

Connect real things with Node.js

## Usage

### GPIO Example

```js
const { gpio } = require("megabit");
const sleep = require("util").promisify(setTimeout);

async function blink() {
  for (;;) {
    await gpio(26).write(1);
    await sleep(1000);
    await gpio(26).write(0);
    await sleep(1000);
  }
}

blink();
```

### I<sup>2</sup>C Example

```js
const { adt7410 } = require("megabit");

async function measure() {
  const temperature = await adt7410().read();
  console.log(`Temperature: ${temperature} ℃`);
}

measure();
```

## Documents

[Megabit API Documentation](https://kou029w.github.io/megabit/)

## Devices

| Device   | Description                                  | API                                                                 |
| -------- | -------------------------------------------- | ------------------------------------------------------------------- |
| ADS1015  | 12-bit Precision Analog to Digital Converter | [ads1015](https://kou029w.github.io/megabit/globals.html#ads1015)   |
| ADT7410  | High Accuracy Digital Temperature Sensor     | [adt7410](https://kou029w.github.io/megabit/globals.html#adt7410)   |
| ADXL345  | 3-axis Accelerometer                         | [adxl345](https://kou029w.github.io/megabit/globals.html#adxl345)   |
| GP2Y0E03 | 4-50 cm Distance Sensor                      | [gp2y0e03](https://kou029w.github.io/megabit/globals.html#gp2y0e03) |
| MPR121   | Proximity Capacitive Touch Sensor Controller | [mpr121](https://kou029w.github.io/megabit/globals.html#mpr121)     |
| PAJ7620  | Gesture Recognition Sensor                   | [paj7620](https://kou029w.github.io/megabit/globals.html#paj7620)   |
| PCA9685  | 16-Channel 12-Bit PWM/Servo Driver           | [pca9685](https://kou029w.github.io/megabit/globals.html#pca9685)   |
| S11059   | Color Sensor                                 | [s11059](https://kou029w.github.io/megabit/globals.html#s11059)     |
| SSD1306  | 128x64 Dot Matrix OLED                       | [ssd1306](https://kou029w.github.io/megabit/globals.html#ssd1306)   |
| SSD1308  | 128x64 Dot Matrix OLED                       | [ssd1308](https://kou029w.github.io/megabit/globals.html#ssd1308)   |
| TSL2561  | Ambient Light Sensor                         | [tsl2561](https://kou029w.github.io/megabit/globals.html#tsl2561)   |
| VEML6070 | UV(A) Light Sensor                           | [veml6070](https://kou029w.github.io/megabit/globals.html#veml6070) |
| VL53L0X  | Time of Flight Distance Sensor               | [vl53l0x](https://kou029w.github.io/megabit/globals.html#vl53l0x)   |
