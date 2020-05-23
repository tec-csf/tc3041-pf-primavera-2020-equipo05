var express = require("express"); //importar express
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; ///puerto disponible

var uri = "mongodb+srv://bases_user:bases123@cluster0-f9acl.gcp.mongodb.net/vendeTuProducto?retryWrites=true&w=majority";

var mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "error de conexion"));
db.once("openUri", function () {
  console.log("Me conecte a mongodb");
});

//middleware
var router = express.Router();

router.use(function (req, res, next) {
  next();
}); //funcion habilita el middleware

router.get("/", function (req, res) {
  res.json({
    mensaje: "keep alive",
  });
});

//declarar los modelos
var Product = require("./app/models/product");
var User = require("./app/models/user");
var productUser = require("./app/models/productUser");
var Carrito = require("./app/models/carrito");
var Compra = require("./app/models/compra");
var newsFeed = require("./app/models/newsFeed");

router
  .route("/productsUsers")
  .post(async function (req, res) {
    var idProd
    await productUser.aggregate([{ $unwind: '$products' }, { $sort: {'products.idProd': -1}},{$limit: 1}], function (err, idProduct) {
      if (err) {
        res.send(err);
      }
      console.log(idProduct[0].products.idProd)
      idProd = parseInt(idProduct[0].products.idProd)+1;
    })

    var producto = {
      idProd: idProd,
      name: req.body.name,
      condition: req.body.condition,
      description: req.body.description,
      quantity: 1, 
      price: parseInt(req.body.price), 
      url: req.body.url,
    }

    productUser.findOneAndUpdate({idUser: 1}, {$push: {products: producto}}, function (error, result) {
      if (error) {
        res.status(404).send({ message: "not found" });
        return;
      }
      if (result == null) {
        res.status(404).send({ result: "not found" });
        return;
      }
      res.json({ mensaje: "Producto agregado" })
    });

    
  })
  .get(function (req, res) {
    productUser.find({ }, function (err, products) {
      if (err) {
        res.send(err);
      }
      res.status(200).send(products);
    })
  });

router
  .route("/alumnos/:id_alumno")
  .get(function (req, res) {
    Alumno.findById(req.params.id_alumno, function (error, alumno) {
      if (error) {
        res.status(404).send({ message: "not found" });
        return;
      }
      if (alumno == null) {
        res.status(404).send({ alumno: "not found" });
        return;
      }
      res.status(200).send(alumno);
    });
  })
  .put(function (req, res) {
    Alumno.findById(req.params.id_alumno, function (err, alumno) {
      if (err) {
        res.send(err);
      }
      alumno.nombre = req.body.nombre;
      alumno.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: "alumno actualizado" });
      });
    });
  })
  .delete(function (req, res) {
    Alumno.remove(
      {
        _id: req.params.id_alumno,
      },
      function (err, alumno) {
        if (err) {
          res.send(err);
        }
        res.json({ mensaje: "borrado con exito" });
      }
    );
  });

router.route("/alumnosv2/:matricula").get(function (req, res) {
  Alumno.find({ matricula: req.params.matricula }, function (error, alumno) {
    if (error) {
      res.status(404).send({ message: "not found" });
      return;
    }
    if (alumno == null) {
      res.status(404).send({ alumno: "not found" });
      return;
    }
    res.status(200).send(alumno);
  }).sort({ nombre: 1 });
});

router.route("/clases").post(async function (req, res) {
  var clase = new Clase();
  clase.nombre = req.body.nombre;
  clase.semestre = req.body.semestre;
  try {
    //alumno.validate();
    await clase.save(function (err) {
      if (err) {
        console.log(err);
        if (err.name == "ValidationError")
          res.status(400).send({ error: err.message });
      }
    });
    res.json({ mensaje: "Clase creado" });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

app.use("/api", router); //url base de nuestro api que tiene las rutas en el routerglobal.fetch = require('node-fetch');
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  next();
});

app.listen(port); //abre el puerto de escucha

console.log("sevidor arriba");
