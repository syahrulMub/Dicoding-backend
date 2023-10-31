const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.resolve(__dirname, './input.txt'), {
    highWaterMark: 15
});
const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
    try {
        let chunk;
        while ((chunk = readableStream.read()) != null) {

            writableStream.write(`${chunk}\n`);
        }
    } catch (error) {

    }
});

readableStream.on('end', () => {
    console.log('done');
    writableStream.end('end for this section');
});