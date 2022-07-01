const User = require('../model/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },
  async auth(req, res) {
    const {email, password} = req.body;
    const user = await User.findAll({where: {email, password}});

    if(user == ''){
      return res.json({error: "erraoo"})
    }

    return res.json(user);
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    return res.json(user);
  }
};