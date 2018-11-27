module.exports = function (sequelize, DataTypes) {
  const Locations = sequelize.define('Locations', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'location name is required',
          min: 2,
        },
      },
    },
    maleResidents: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'number of male residents required',
        },
      },
    },
    femaleResidents: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Number female residents is required',
        },
      },
    },
    totalResidents: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        notEmpty: {
          args: true,
          msg: 'total number of residents is required',
        },
      },
    },
    relativeLocationId: {
      type: DataTypes.UUID,
      defaultValue: null,
      as: 'relative',
    },
  });

  Locations.associate = (models) => {
    Locations.hasMany(
      models.Locations,
      { as: 'relative', foreignKey: 'relativeLocationId' },
      { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
    );
  };
  return Locations;
};
