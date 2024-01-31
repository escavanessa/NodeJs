// const fs = require('fs');

//this just makes a directory. it takes the name of the new directory/ path - and also an err call back
//exist sync method to chck if it exists or not so you dont accidently like write over a directory or whatever
//checking for file existence is usually a good idea before you start going ham and cheese

// if (!fs.existsSync('./new')) {

//     fs.mkdir('./new', (err) => {
//         if (err) throw err;
//         console.log('directory created')
//     })
// }