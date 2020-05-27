// create some promises
const workOnProjects = () => {
    return new Promise(resolve => {
        console.log('working on projects');
        setTimeout(() => {
            console.log('projects are all done');
            resolve();
        }, 1000);
    })
};

const learnNewAlgos = () => {
    return new Promise(resolve => {
        console.log('grinding algos');
        setTimeout(() => {
            console.log('I am a Leet Code Master');
            resolve();
        }, 1250);
    })
};

const landInterview = () => {
    return new Promise(resolve => {
        console.log();
        setTimeout(() => {
            console.log();
            resolve();
        }, 500);
    })
};

const crushInterview = (hiringFreeze) => {
    return new Promise((resolve, reject) => {
        console.log('prepping for interview');
        setTimeout(() => {
            reject();
        });
    })

};

// 
const becomeASoftwareEngineer = async () => {
    await workOnProjects();
    await learnNewAlgos();
    await landInterview();
    console.log('Take a break');
    try {
        await crushInterview(true);
    } catch (e) {
        console.error('Error', e);
    }
}

becomeASoftwareEngineer();
