// import http from 'http';
// import debug from "debug";
// import app from './app';

// const normalizePort = (val: any) => {
//     const port = typeof val === 'string' ? parseInt(val, 10) : val;

//     if (isNaN(port)) {
//         // named pipe
//         return val;
//     }

//     if (port >= 0) {
//         // port number
//         return port;
//     }

//     return false;
// };

// const onError = (error: NodeJS.ErrnoException) => {
//     if (error.syscall !== "listen") {
//         throw error;
//     }
//     const bind = typeof port === "string" ? "pipe " + port : "port " + port;
//     switch (error.code) {
//         case "EACCES":
//             console.error(bind + " requires elevated privileges");
//             process.exit(1);
//             break;
//         case "EADDRINUSE":
//             console.error(bind + " is already in use");
//             process.exit(1);
//             break;
//         default:
//             throw error;
//     }
// };

// const onListening = () => {
//     const addr = server.address();
//     const bind = typeof port === "string" ? "pipe " + port : "port " + port;
//     debug("Listening on " + bind);
// };

// const port = normalizePort(process.env.PORT || "3000");
// const server = http.createServer(app);

// server.on("error", onError);
// server.on("listening", onListening);
// server.listen(port);

import 'reflect-metadata';;
import { setLogLevel, LogLevels } from '@typegoose/typegoose';
import validateEnv from './utils/validateEnv';
import App from '@/app';

setLogLevel(LogLevels.ERROR);

async function main() {
    try {
        validateEnv();
        const app = new App([

        ]);
        app.listen();
    } catch (error) {
        console.log('Failed to launch app', error);
    }

    process.on('uncaughtException', function (exception) {
        console.log('uncaughtException', exception); // to see your exception details in the console
        // if you are on production, maybe you can send the exception details to your
        // email as well ?
    });

    process.on('unhandledRejection', (reason, p) => {
        console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
        // application specific logging, throwing an error, or other logic here
    });
} 

main();
