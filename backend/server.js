var express = require('express');

const port = process.env.PORT || 8080; ///puerto disponible
const app = express();
const setupServer = require('./setupServer')
setupServer(app);

const router = require('./app/routes/main')

// redirect to frontend
app.get('/',function(req,res){  
  // create new session object.
  if(req.session.key) {
      // if email key is sent redirect.
      res.redirect('/home');
  }
});

//url base de nuestro api que tiene las rutas en el routerglobal.fetch = require('node-fetch');
app.use("/api", router); 
app.listen(port); //abre el puerto de escucha
console.log("sevidor arriba");
