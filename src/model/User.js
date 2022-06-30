const {Model, DataTypes} = require('sequelize');

class User extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },{
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.Event, {foreingKey: 'user_id', as: 'events'})
  }
}

module.exports = User