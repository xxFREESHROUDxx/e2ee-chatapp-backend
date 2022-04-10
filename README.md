## Technology Stack

- NodeJS
- Express
- TypeScript
- MongoDB (Setup can also be done using docker - optional)
- Web Sockets

## Steps for SetUp

```
npm start
```

- Download this repo (backend/server) and run the following commands in terminal -

```
npm install
npm run build
npm run seed
nodemon start
```

### It is important to follow the above commands as the application won't work without the dependencies and the database setup.

Also, the seed.js script enables you to setup the database automatically. Alternate option is to create the Database manually for experimental purpose.

## Web Sockets (Push Server) as a Service

- HTTP protocol upgrade to websocket (101 status code)

```
import * as http from ‘http’

export default class WebSockets {
   	public static wsServer: any
			  static init(server: http.Server): void {
       		const WebSocketServer = require("websocket").server
         this.wsServer = new WebSocketServer({
              "httpServer": server
         })
    }
}

wsServer.on(‘request',request => {
   const connection = request.accept(null, request.origin);

   connection.on(‘message’, message => {
     console.log('Received Message:', message.utf8Data);
     connection.sendUTF('Hi this is WebSocket server!');
   });

   connection.on('close',(reasonCode, description) => {
       console.log('Client has disconnected.');
   });
});
```

## Add ons

- Apidoc integrated for better api documentation
- Dummy cron job
- Dummy controller, router, models configured.
- Basic **JWT** setup.
- Development and production environment setup for easy of use

## Resources

- [Writing WebSocket Servers](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)

**PRs and issues are most welcome**
