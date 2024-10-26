const http = require("http");
// read the file using the filesystem
const fs = require("fs");






// declaring variables/can make components

// const home = fs.readFile("./index.html", "utf-8", (err) => {
//     if (err) {
//         throw err;
//     }
// }); // there is a readFileSync as well which acts as synchronous func

const home = fs.readFileSync("./index.html"); // sync is working while in async function we need to handle err
// parameters will be - req,res,(next,err) optional -- created a server
// store the server in a veriable
const server = http.createServer((req, res) => {

    if (req.url === "/") {
        //retrun is used to come out of the if condition otherwise it will execute all the if conditions and server will crash
        return res.end(home);
    }

    // if (req.url === "/") {

    //     fs.readFile("./index.html", "utf-8", (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //         return res.end(data);
    //     });
    // }
    if (req.url === "/about") {
        return res.end("<h1>About Page<h1>");
    }
    if (req.url === "/contact") {
        return res.end("<h1>Contact Page<h1>");
    }
    if (req.url === "/service") {
        return res.end("<h1>Service Page<h1>");
    } else {
        return res.end("<h1>404 Page Not found<h1>");
    }
});

// define the port number for localhost
//let PORT = 3000;
// but on production  we use PORT = process.env.PORT bcz plateform provide PORT based on its availability
PORT = process.env.PORT;
const hostname = "localhost";
// listen the server
server.listen(PORT, () => {
    console.log(`Server is working on http://${hostname}:${PORT}`)
}); 