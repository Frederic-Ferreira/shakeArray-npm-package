# shakeArray

shakeArray is a function to randomize the position of elements in an array.

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install shakeArray.

```bash
npm install shake-array
```

## Usage

```js
import shakeArray from 'shake-array';

const arr = [1, 2, 3, 4, 5];

const modifiedArr = shakeArray(arr);

console.log(modifiedArr);
// expected output : [2, 5, 1, 3, 4]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
