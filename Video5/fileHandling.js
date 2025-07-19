const fs = require("fs"); //yes fs is a built in module

//Sync...
//fs.writeFileSync("./test.txt","Hey There") //rewrites/overides the content of the file if already created


//Async
//fs.writeFile("./test.txt","Hello There",(e)=>{}); //same thing but asynchronous

//in the next video we will understand the said difference between them

//const result2 = fs.readFile("./contacts.txt","utf-8");    //gives error during asynchronous call

//the sync call returns the output to a variable whereas the async call expects a call back function in 
// which it will return the result and the error

//Synchronous
const result1 = fs.readFileSync("./contacts.txt","utf-8");
//console.log(result1)

//Async
fs.readFile("./contacts.txt","utf-8", (err,result) => {
    if(err){
        console.log("Error  = ",err);
    }else{
        console.log(result);
    }
})

//Synchronous - does not overwrite the file rather just adds the extra text
// so theoratically we can use this to create the log files, which keeps the log of any activity using this fs module

fs.appendFileSync("./test.txt", `${Date.now()} Hello There \n`);

//Async




//we can even copy a file
//fs.cpSync("./test.txt","./copy.txt")
//or delete a file
//fs.unlinkSync("./copy.txt")   //throws an error if file is not present    //Error: ENOENT: no such file or directory, unlink './copy.txt'

// we can the stat of a file
const status = fs.statSync("./contacts.txt")
console.log(status)
console.log(status.isFile())
console.log(status.isDirectory())

//we can even make a directory
//fs.mkdirSync("./a/b/c",{recursive:true})

//this whole fs thing is node enviroment thing not a vanilla javascript or web enviroment thing