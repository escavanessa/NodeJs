//const fs = require('fs');
const path = require('path');

//if youre reading a long file, you can do rs = fs.createreadStream, pass it a file name and then {encoding: utf8} so you can actually read it. 
//you can write the long file by using ws = fs.createWriteStream, pass it the new name of the file. 
// then you can do rs.pipe(ws) literally 'piping' whatever is in rs to ws.


//3. instead of callback hell - you can do this.
//you take the data from the starter, you write a new file, then append, then rename the file. then youre getting that new file, reading that data then logging it. all in one function 
const fsPromises = require('fs').promises;

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'rename.txt'), 'utf8')
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'rename.txt'), data);

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\n yet another append');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt')), path.join(__dirname, 'files', 'promiseComplete.txt')
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

fileOps();

// fs.readFile(path.join(__dirname, 'files', 'rename.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

////////////////////////////////////////////////////////////////////////////////////

// 1.a instead of hard coding the file name below, you can require the path adn replace it with path.join(__dirname, 'files', 'filename.ext')

// fs.readFile('./files/imaginary.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })
// fs.readFile(path.join(__dirname, 'file', 'starte.txt'), (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })
/////////////////////////////////////////////////////////////////////////////////////


//in theory, if there were two .txt files in a folder together with this file, i could do the following\
// 1. fs (file system) takes the method readFile and the inside it takes the name of the file you want to read and two parameters
// a callback function which is err and the data we read. if you only log the data argument, youd get it as buffer data -> the tostring 
//method turns it into the actual text inside the file. 


// fs.readFile('./files/imaginary.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

// OR you can add 'utf8' as a parameter to the .readFile. this will convert the data to the text so there is no need to add the to string method. 

// fs.readFile('./files/imaginary.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

//for the err callback, process is available in node you dont need to import it or anything.
//listen for an uncaught exception, console the error then quit out of the application. 

// process.on('uncaughtException', err => {
//     console.error(`There was an error: ${err}`);
//     process.exit(1);
// })

/////////////////////////////////////////////////////////////////////////////////

// 2. to write a new file - no data param - youre writing data not reading it. UTF8 is by default so you dont need to include it.
//so you need name of path, what the file contains, then the err callback\
// MAKE SURE THE 'FILES' PART EXISTS IF YOU WANT IT TO GO TO A SPECIFIC FOLDER. IF NOT - THE WRITTEN FILE WILL GO INTO THE DIRECTORY. 


//call back hell
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'nice to meet you', (err) => {
//     if (err) throw err;
//     console.log('write complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n yes it is', (err) => {
//         if (err) throw err;
//         console.log('Append complete');
// //renam takes path,join to get teh file you want to change. then path.join again to change the name of the file
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newreply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Append complete');
//         })
//     })
// })

//APPEND - this literally just made another file. add it inside the write file/ saving and running will add whatever is inside the append file to append again
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'testing text', (err) => {
//     if (err) throw err;
//     console.log('Append complete');
// })

// process.on('uncaughtException', err => {
//     console.error(`There was an error: ${err}`);
//     process.exit(1);
// })

