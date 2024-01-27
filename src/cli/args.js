const parseArgs = () => {
    const argvArray = process.argv.slice(2);
    const flagsArray = [];

    for(let i = 0; i < argvArray.length; i += 2) {
        flagsArray.push(argvArray.slice(i, i + 2));
    }

    const result = flagsArray.map((arr) => arr.map((el) => el.replace(/^--/, '')).join(' is '));
    console.log(result.join(', '));
};

parseArgs();
