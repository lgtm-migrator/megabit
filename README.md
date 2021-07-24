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
const { sht30 } = require("megabit");

async function measure() {
  const { humidity, temperature } = await sht30().read();
  console.log(`Humidity: ${humidity.toFixed(2)} %`);
  console.log(`Temperature: ${temperature.toFixed(2)} ℃`);
}

measure();
```

## Documents

[Megabit API Documentation](https://kou029w.github.io/megabit/)

## Devices

| Device   | Description                                  | API                                                                 |
| -------- | -------------------------------------------- | ------------------------------------------------------------------- |
| ADS1015  | 12-bit Precision Analog to Digital Converter | [ads1015](https://kou029w.github.io/megabit/modules/ads1015.html)   |
| ADT7410  | High Accuracy Digital Temperature Sensor     | [adt7410](https://kou029w.github.io/megabit/modules/adt7410.html)   |
| ADXL345  | 3-axis Accelerometer                         | [adxl345](https://kou029w.github.io/megabit/modules/adxl345.html)   |
| GP2Y0E03 | 4-50 cm Distance Sensor                      | [gp2y0e03](https://kou029w.github.io/megabit/modules/gp2y0e03.html) |
| MPR121   | Proximity Capacitive Touch Sensor Controller | [mpr121](https://kou029w.github.io/megabit/modules/mpr121.html)     |
| PAJ7620  | Gesture Recognition Sensor                   | [paj7620](https://kou029w.github.io/megabit/modules/paj7620.html)   |
| PCA9685  | 16-Channel 12-Bit PWM/Servo Driver           | [pca9685](https://kou029w.github.io/megabit/modules/pca9685.html)   |
| S11059   | Color Sensor                                 | [s11059](https://kou029w.github.io/megabit/modules/s11059.html)     |
| SHT30    | Humidity and Temperature Sensor              | [sht30](https://kou029w.github.io/megabit/modules/sht30.html)       |
| SSD1306  | 128x64 Dot Matrix OLED                       | [ssd1306](https://kou029w.github.io/megabit/modules/ssd1306.html)   |
| SSD1308  | 128x64 Dot Matrix OLED                       | [ssd1308](https://kou029w.github.io/megabit/modules/ssd1308.html)   |
| TSL2561  | Ambient Light Sensor                         | [tsl2561](https://kou029w.github.io/megabit/modules/tsl2561.html)   |
| VEML6070 | UV(A) Light Sensor                           | [veml6070](https://kou029w.github.io/megabit/modules/veml6070.html) |
| VL53L0X  | Time of Flight Distance Sensor               | [vl53l0x](https://kou029w.github.io/megabit/modules/vl53l0x.html)   |
