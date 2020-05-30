var express = require('express');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Cookies = require('cookies');

var app = express();

const cors = require('cors');
app.use(cors());
var morgan = require("morgan");
var passwordHash = require('password-hash');
var port = process.env.PORT || 8080; ///puerto disponible

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function(req,res){  
  // create new session object.
  if(req.session.key) {
      // if email key is sent redirect.
      res.redirect('/home');
  } else {
      // else go to home page.
      res.render('index.html');
  }
});

// setup moongoose and mongoDB
var uri = "mongodb+srv://bases_user:bases123@cluster0-f9acl.gcp.mongodb.net/vendeTuProducto?retryWrites=true&w=majority";
//var uri = "mongodb+srv://bases_user:bases@cluster0-f9acl.gcp.mongodb.net/vendeTuProducto?retryWrites=true&w=majority";

var mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.connection
  .once("open", function () {
    console.log("MongoDB Connected");
  })
;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err)=>{
  console.error("Error de conexion")
})

// redis sessions
const redisClient = require ('./redis')
redisClient.on('connect', function() {
  console.log("Redis Connected")
});
app.use(session({
  secret: 'ssshhhhh',
  // create new redis store.
  store: new redisStore({client: redisClient}),
  saveUninitialized: true,
  resave: false,
  cookie: { secure: false }
}));

app.use(cookieParser("secretSign#143_!223"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const router = require('./app/routes/main')

//url base de nuestro api que tiene las rutas en el routerglobal.fetch = require('node-fetch');
app.use("/api", router); 

app.listen(port); //abre el puerto de escucha
console.log("sevidor arriba");
