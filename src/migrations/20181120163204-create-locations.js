module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable("Locations", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          min: 2,
          msg: "location name cannot be empty"
        }
      },
      maleResidents: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          notEmpty: true,
          msg: "number of male residents required"
        }
      },
      femaleResidents: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          notEmpty: true,
          msg: "number of female residents required"
        }
      },
      totalResidents: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          notEmpty: true,
          msg: "number of residents is required"
        }
      },
      relativeLocationId: {
        type: Sequelize.UUID,
        references: {
          model: "Locations",
          key: "id",
          as: "relative"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Locations");
  },
};
