const jsonServer = require('json-server'); //get package from the json store
const server = jsonServer.create(); //create and invoked like this及建立變數server
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; //顯示what port do we serve to

server.use(middlewares);  //所以我們才能在router使用middlewares
server.use(router);

server.listen(port);
