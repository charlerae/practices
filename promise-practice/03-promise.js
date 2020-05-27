

function grindTheBeans() {
    return new Promise(resolve => {
        setTimeout( () => {
            console.log(('done grinding the beans'));
            resolve();
        }, 1000);
    });
}

function heatTheWater() {
    return new Promise(resolve => {
        setTimeout( () => {
            console.log(('done heating water'));
            resolve();
        }, 2000);
    })
}

function addTheBeans() {
    return new Promise(resolve => {
        setTimeout( () => {
            console.log(('done adding the beans to water'));
            resolve();
        }, 500);
    })
}

function enjoy() {
    return new Promise(resolve => {
        setTimeout( () => {
            console.log(('Enjoy!'));
            resolve()
        }, 750);
    })
}

// refactor promise code from 01-promise.js to use promise.all()
    // grindTheBeans()
    //     .then(heatTheWater)
    //     .then(addTheBeans)
    //     .then(enjoy);


// create variable for coffee functions
const makeCoffee = [grindTheBeans(), heatTheWater(), addTheBeans(), enjoy()];

// refactored version
Promise.all(makeCoffee)
    .then(results => {
        console.log('Take That StarBucks!!');
    })
    .catch(reason => {
        console.log('error', reason);
    });
