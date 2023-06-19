const Company = require('../models/company')

module.exports = {
  index
};

function index(req, res) {
  res.render('company/index' , {
    staff: Company.getStaff()
  });
}