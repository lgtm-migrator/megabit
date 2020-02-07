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
