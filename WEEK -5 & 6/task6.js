function displayEnvVar(envVariable){
    const val = process.env[envVariable];
    if(val != undefined){
        console.log(`${envVariable}: ${val}`);
    }
    else{
        console.log(`${envVariable} Not Found`);
    }
}
const envVariable = 'PATH';
displayEnvVar(envVariable);