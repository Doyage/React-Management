module.exports = (sequelize, DataTypes) => (
  sequelize.define('customer', {
    img: {
      type: DataTypes.STRING(1024),
      allowNull: true,
    },
    userName: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    birthday: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    job: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
  }, {
    timestamps: true,
    paranoid: true,
  })
);
