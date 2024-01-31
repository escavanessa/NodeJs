const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');

//format for the date methods and uuid for a random key


//requiring the file system to make a directory, adda txt file that contains all the info we wanna keep
//jspromise to avoid call back hell
//path to make navigating the files less error prone
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');


//datetime var to capture the date for the logitem.
const logEvents = async (message) => {
    const dateTime =`${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`
    console.log(logItem)
//try catch to create directory if there is no directory named logs. 
//append/ create a txt file if one does not exist. in thie txt file were are displaying ot adding logitem as the data.
    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventLog.txt'), logItem);
    } catch (err) {
        console.log(err)
    }
}//

module.exports = logEvents