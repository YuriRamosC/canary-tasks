require('marko/node-require').install();
require('marko/express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var fs = require('fs');

app.use('/estatico', express.static('./app/public'));
//multer configuration
/*const multer = require('multer');
const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/task-images')
  },
  filename(req, file = {}, cb) {
    const { originalname } = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null, `${file.originalname}${fileExtension}`);
  }
});
const upload = multer({storage: storageConfig});
arquivoUpload = upload.single('file'); // mudar para array*/

//
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

const rotas = require('../../app/rotas/rotas');
rotas(app);


module.exports = app;