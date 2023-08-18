const envVariables = process.env;
for(const i in envVariables){
      console.log(`${i}: ${envVariables[i]}`);
}