import express from 'express';
import { connect } from 'mongoose';
import { LOG_FORMAT, NODE_ENV, PORT, ORIGIN, CREDENTIALS } from '@/config';
import { dbConnection } from './databases';
import morgan from 'morgan';
import { logger, stream } from '@utils/logger';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { Routes } from '@interfaces/routes.interface';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import errorMiddleware from '@/middlewares/error.middlewares';

// import { Request, Response, NextFunction } from 'express';
// const bodyParser = require("body-parser");
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// mongoose.connect("mongodb+srv://mongo:mongo@cluster0.5yume.mongodb.net/")
//     .then(() => {
//         console.log("Connected to database!");
//     })
//     .catch(() => {
//         console.log("Connection failed!");
//     });

// app.use(bodyParser.json()); // Це middleware
// app.use(bodyParser.urlencoded({ extended: false })); // Це middleware

// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200"); // Дозволити доступ з будь-якого домену
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//          // Дозволити ці заголовки
//     );
//     res.setHeader("Access-Control-Allow-Credentials", "true");

//     if (req.method === "OPTIONS") {
//         res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
//         return res.status(200).json({});
//     }
//     next();
// });

// app.post("/api/posts", (req: Request, res: Response, next: NextFunction) => {
//     const post = req.body as { [key: string]: string }; // Отримати пост з запиту
//     console.log(post);
//     res.status(201).json({
//         message: "Пост успішно додано"
//     });
// }); // Це middleware

// app.get("/api/posts", (req: Request, res: Response, next: NextFunction) => {
//     const posts = [
//         {
//             id: "1234567890",
//             title: "Перший пост на серверному боці",
//             content: "Це надходить з сервера"
//         },
//         {
//             id: "0987654321",
//             title: "Другий пост на серверному боці",
//             content: "Це надходить з сервера"
//         }
//     ];
//     res.status(200).json({
//         message: "Пости успішно отримано!",
//         posts: posts
//     });
// }); // Це middleware

// export default app;

declare module 'http' {
   export interface IncomingMessage {
      //    user: User;
      // session: Session;
   }
}

class App {
   public app: express.Application;
   public env: string;
   public port: string | number;

   constructor(
      private routes: Routes[]
   ) {

      this.app = express();
      this.env = NODE_ENV || 'development';
      this.port = PORT || 3000;

      this.initDatabase();
   }

   private async initDatabase() {
      try {
         await this.connectToDatabase()
            .then(() => {
               this.initializeMiddlewares();
               this.initializeRoutes(this.routes);
               this.initializeSwagger();
               this.initializeErrorHandling();
            });
      }
      catch (appErr) {
         console.log('APP ERROR: ', appErr);
      }
   }

   public listen() {
      this.app.listen(this.port, () => {
         logger.info(`=================================`);
         logger.info(`======= ENV: ${this.env} =======`);
         logger.info(`🚀 App listening on the port ${this.port}`);
         logger.info(`=================================`);
      });
   }

   public getServer() {
      return this.app;
   }

   private async connectToDatabase() {
      try {
         console.log('connectToDatabase with ENV', this.env);

         if (this.env !== 'production') {
            // set('debug', true);
         }

         await connect(dbConnection)
            .then(() => {
               console.log("Connected to database!");
            })
            .catch(() => {
               console.log("Connection failed!");
            });
      }
      catch (ex) {
         console.log(`Failed to connect to mongo`, ex);
      }
   }

   private initializeMiddlewares() {
      this.app.use(morgan(LOG_FORMAT, { stream }));
      this.app.use(cors({
         origin: ORIGIN.split(','),
         credentials: CREDENTIALS
      }));

      const rawBodySaver = function (req, res, buffer, encoding) {
         if (buffer && buffer.length) {
            req.rawBody = buffer.toString(encoding || 'utf8');
         }
      };

      console.log('Set cors with ', { origin: ORIGIN, credentials: CREDENTIALS })
      this.app.use(hpp());
      this.app.use(helmet());
      this.app.use(compression());
      this.app.use(express.json({ verify: rawBodySaver }));
      this.app.use(express.urlencoded({ verify: rawBodySaver, extended: true }));
      this.app.use(cookieParser());
   }

   private initializeRoutes(routes: Routes[]) {
      routes.forEach(route => {
         this.app.use('/', route.router);
      });
   }

   private initializeSwagger() {
      const options = {
         swaggerDefinition: {
            info: {
               title: 'REST API',
               version: '1.0.0',
               description: 'Example docs',
            },
         },
         apis: ['swagger.yaml'],
      };

      const specs = swaggerJSDoc(options);
      this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
   }

   private initializeErrorHandling() {
      this.app.use(errorMiddleware);
   }
}

export default App;