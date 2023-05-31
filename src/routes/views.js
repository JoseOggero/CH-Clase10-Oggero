const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    productos: ['Producto 1', 'Producto 2', 'Producto 3']
  });
});

router.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts', {
    productos: ['Producto 1', 'Producto 2', 'Producto 3']
  });
});

module.exports = router;
