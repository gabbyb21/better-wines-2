const staff = [
  {
    name: 'Prince Akachi',
    position: 'CEO',
    email: 'princeakachi@betterwines.com',
    img: 'images/princeakachi.jpg'
  },
  {
    name: 'Jack Finnigan',
    position: 'Manager',
    email: 'jack@betterwines.com',
    img: 'images/jackfinnigan.jpg'
  },
  {
    name: 'Nick Karvounis',
    position: 'Wine Concierge',
    email: 'nick@betterwines.com',
    img: 'images/nickkarvounis.jpg'

  }
];

module.exports = {
  getStaff
};

function getStaff() {
  return staff
}