const parseEnv = () => {
    const rsVars = Object.entries(process.env).filter((arr) => arr[0].startsWith('RSS_'));
    const rsString = rsVars.map((arr) => arr.join('=')).join('; ')
    console.log(rsString);
};

parseEnv();
