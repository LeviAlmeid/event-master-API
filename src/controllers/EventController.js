const User = require('../model/User');
const Event = require('../model/Event');

module.exports = {
  async findAll(req, res) {
    const events = await Event.findAll();

    return res.json(events);
  },

  async index(req, res) {
    const {user_id} = req.params;

    const user = await User.findByPk(user_id);

    const event = await Event.findAll();

    return res.json(event)
  },

  async store(req, res) {
    const {user_id} = req.params;
    const { name, linkPicture, description, date, startAt, finishAt} = req.body;

    const user = await User.findByPk(user_id)

    if(!user) {
      return res.status(400).json({error: "User not found"})
    }

    const event = await Event.create({
      name,
      linkPicture,
      description,
      date: new Date(date),
      startAt,
      finishAt,
      user_id,
    });

    return res.json(event);
  }
}