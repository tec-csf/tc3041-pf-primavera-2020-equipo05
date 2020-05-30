function setupServer(app){
  setMiddleware(app);
  setMongoose(app);
  setRedisSessions(app);
}

function setMiddleware(app) {

  const bodyParser = require('body-parser');
  const cookieParser = require('cookie-parser');
  const Cookies = require('cookies');
  const morgan = require("morgan");
  const cors = require('cors');

  app.use(cors());
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser("secretSign#143_!223"));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
}

function setMongoose(app){
  const uri = "mongodb+srv://bases_user:bases123@cluster0-f9acl.gcp.mongodb.net/vendeTuProducto?retryWrites=true&w=majority";

  const mongoose = require("mongoose");
  mongoose.set('useFindAndModify', false);
  mongoose.connection
    .once("open", function () {
      console.log("MongoDB Connected");
    })
  ;
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err)=>{
    console.error("Error de conexion")
  })
}

function setRedisSessions(app) {
  const session = require('express-session');
  const redisClient = require ('./redis')
  const redisStore = require('connect-redis')(session);

  redisClient.on('connect', function() {
    console.log("Redis Connected")
  });

  app.use(session({
    secret: 'ssshhhhh',
    store: new redisStore({client: redisClient}),
    saveUninitialized: true,
    resave: false,
    cookie: { secure: false }
  }));
}

module.exports = setupServer;
