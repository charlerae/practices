
// create a promise object
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise fulfilled');
        // reject('promise rejected');
    }, 1000);
});

// implementation one
myPromise
    .then(
    (result) => {
    console.log('Whoot!', result);
    },
    (reason) => {
    console.log('Whomp!', reason);
});

// implementation two
myPromise
    .then((result) => {
        console.log('Whoot! Whoot!', result);
    })
    .catch((reason) => {
        console.log('Whomp! Whomp!', reason);
    });

// implementation three
myPromise
    .then((result) => {
        console.log('Whoot! Whoot! Whoot!', result);
        return `huzahh!`;
    })
    .then((result) => {
        console.log('WHOOT WHOOT WHOOT!!', result);
    })
    .catch((reason) => {
        console.log('Whomp! Whomp!', reason);
    });
