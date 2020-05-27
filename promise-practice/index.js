// require dependencies
const fetch = ('node-fetch');
const dash = require('dashdash');
const fs = require('fs');

//
const options = {
    allowUnknown: true,

    options: [
        {
        names: ['output', 'o'],
        type: 'arrayOfString',
        help: 'file in which to store the fetched content'
        }
    ],
};

const parser = dash.createParser(options);
const opts = parser.parse(options);
console.log('options>>>' + opts);
