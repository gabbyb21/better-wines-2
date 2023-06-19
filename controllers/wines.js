const Wine = require('../models/wine')

module.exports = {
  index
};

function index(req, res) {
  res.render('wines/index' , {
    wines: Wine.getWines()
  });
}