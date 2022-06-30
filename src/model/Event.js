const {Model, DataTypes} = require('sequelize');

class Event extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      linkPicture: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.DATE,
      startAt: DataTypes.STRING,
      finishAt: DataTypes.STRING,
    },{
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'user_id', as: 'creator'})
  }
}

module.exports = Event