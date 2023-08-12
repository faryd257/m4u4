var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET NOVEDADES PAGINA*/
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getnovedades();
  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});

//Para eliminar una novedad/

router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id; //2

  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades')
}); // cierra get de eliminar

module.exports = router;