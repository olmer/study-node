exports.homePage = (req, res) => {
  res.render('index', {"a": 2});
};

exports.addStore = (req, res) => {
  res.render('editStore', {title: 'Add Store'});
};

exports.createStore = (req, res) => {
  res.json(req.body);
};