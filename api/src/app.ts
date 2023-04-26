import express, {Request, Response, NextFunction,Application} from 'express';
import routes from './routes/index';
var cookieParser = require('cookie-parser')
var  morgan  = require( "morgan") 
var  cors  = require ( "cors") 


const app: Application = express();

app.use('/api', routes);

app.use(express.urlencoded({extended: true, limit: '50mb'})); //middleware
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
 cors({
  origin: "http://localhost:3000/",
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
 })
);

interface error {
    status: number;
    message: string;
   }
   app.use((err: error, req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
   });




export default app;


