// Export
// Function -1
const footer1=()=>{
    console.log("Footer");
}

// Function -2
const footer2=()=>{
    console.log(new Date().getTime());
}

// export foot1,foot2(Takma ad)
module.exports.foot1=footer1;
module.exports.foot2=footer2;