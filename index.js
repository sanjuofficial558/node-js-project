const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "./")

// console.log(dir);

// QUESTION NO-02
// make new file
// fs.writeFileSync(`${dir}/nodejs_arch.txt`, `Node.js architecture revolves around its event-driven, asynchronous nature, utilizing a single-threaded event loop for efficient handling of concurrent operations. It leverages the V8 JavaScript engine, CommonJS modules, and the Libuv library, making it a versatile platform for building scalable and performant applications`, (err)=>{
//         if(!err) console.log("File Deleted Successfully.");
// });

// QUESTION NO-03
// read existing file 
// fs.readFile(`${dir}/nodejs_arch.txt`,"utf8", (err, data)=>{
//    console.log(data); 
// })

// QUESTION NO-04
//append existing file
// fs.appendFileSync(`${dir}/nodejs_arch.txt`, " ::--- Node.js uses an event-driven architecture with an event loop, which enables asynchronous, non-blocking behavior. It allows handling multiple requests concurrently without waiting for each operation to complete.", (err)=>{
//     if(!err) console.log("file appended")
// });

// read existing file 
// fs.readFile(`${dir}/nodejs_arch.txt`,"utf8", (err, data)=>{
//    console.log(data); 
// });



// QUESTION NO-05
// delete file operation
// fs.unlinkSync(`${dir}/nodejs_arch.txt`, (err)=>{
//     if(!err) console.log("File Deleted Successfully.");
// })


// QUESTION NO-06

// const os = require("os");

// console.log("OS Architecture: ", os.arch());
// console.log("OS Type: ", os.type());
// console.log("OS Platform: ", os.platform());
// console.log("OS RELEASE: ", os.release());


// QUESTION NO-07

// const http = require("http");
// const port = 5000;

// const server = http.createServer((req, resp)=>{
//     resp.writeHead(200, { 'Content-Type': 'application/json'})
//     resp.end("I am happy to learn full stack web development from PW SKILLS");
// })

// server.listen(port, (err)=>{
//     if(!err) console.log(`Server is running at Port ${port}`);
// })



// QUESTION NO-08
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// const subscribeMessage = (channel) =>{
//     console.log(`Thank you for subscribing ${channel}`);
// }
// myEmitter.on("subscribe", subscribeMessage);
// myEmitter.emit("subscribe", "College Wallah");


// QUESTION NO-09
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();
// const subscribeMessage = (channel) =>{
//     console.log(`Thank you for subscribing ${channel}`);
// }
// myEmitter.on("subscribe", subscribeMessage);

// myEmitter.emit("subscribe", "College Wallah");

// console.log(`Event Listener removed.`);
// myEmitter.removeListener("subscribe", subscribeMessage)

// myEmitter.emit("subscribe", "College Wallah");



// QUESTION NO-10
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();
// const subscribeMessage = (channel) =>{
//     console.log(`Thank you for subscribing ${channel}`);
// }
// myEmitter.on("subscribe", subscribeMessage);

// myEmitter.emit("subscribe", "College Wallah");

// console.log(`Default Max EventListener ${myEmitter.getMaxListeners()}`);

// myEmitter.setMaxListeners(15)

// console.log(`Updated Max EventListener ${myEmitter.getMaxListeners()}`);