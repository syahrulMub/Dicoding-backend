const fs = require('fs');
const path = require('path');

const fileReadCallBack = (error, data) => {
    if (error) {
        console.log('error processic data');
        return;
    }
    console.log(data);
};

fs.readFile(path.resolve(__dirname, 'todo.txt'), 'UTF-8', fileReadCallBack);