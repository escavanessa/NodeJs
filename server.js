//common core modules
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;



const logEvents = require('./logEvent')
const EventEmitter = require('node:events');
class Emitter extends EventEmitter { };
//initialize object
const myEmitter = new Emitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));
//define port to listen on
const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, Response) => {
    try {
        const rawData = await fsPromises.readFile(filePath, 
            !contentType.includes('image') ? 'utf-8' : ' '
            );
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData
        Response.writeHead(
            filePath.includes('404.html') ? 404 : 200,
            { 'Content-Type': contentType }
            );
        Response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        )
    } catch (error) {
        console.log(error);
        myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt')
        Response.statusCode = 500;
        Response.end();
    }
}


//creating the actual server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt')
    const extension = path.extname(req.url);
    let contentType;

    //a switch statement that looks at the extension of the requests or file content type.
    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    //whatever the result is will be saved in file path.
    let filePath =
        // if the content type is html and the url is just a slash, then set the path name using the views directory and set it to index.html
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
            //if the above is not the case, check the next condition. if its an html content type and last character is a slash
            : contentType === 'text/html' && req.url.slice(-1) === '/'
                ? path.join(__dirname, 'views', req.url, 'index.html')
                //just check if content type is html
                : contentType === 'text/html'
                    ? path.join(__dirname, 'views', req.url)
                    : path.join(__dirname, req.url);
    //this final path above is just the default if none of the above is true

    //makes the .html extension not required in the browser!
    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

    //this will be a true or false value to see if the file exists
    const fileExists = fs.existsSync(filePath);
    //this is where we would serve the appropriate file and handling if we did get the right file
    if (fileExists) {
        //serve file using function above
        serveFile(filePath, contentType, res);
    } else {
        //404
        //301 redirect
        //this switch statement takes the base portion of a what is saved in the filePath above
        //it redirects using res.writehead if any of the cases match. res.writehead takes a code and a key value pair of location and path.
        switch (path.parse(filePath).base) {
            case 'old-page.html':
                res.writeHead(301, { 'Location': '/new-page.html' });
                res.end();
                break;
            case 'www-page.html':
                res.writeHead(301, { 'Location': '/' });
                res.end();
                break;
            default:
                //serve 404 response
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
        }
    }
});
////
//always add the server.listen to the end of your server file. 
server.listen(PORT, () => console.log(`server running on port ${PORT}`));

