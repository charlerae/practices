
// coffee making functions
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

// cleaner code using promises instead of callbacks
grindTheBeans()
    .then(heatTheWater)
    .then(addTheBeans)
    .then(enjoy);
