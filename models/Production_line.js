
const { Model } = require(`objection`);
const Area = require(`./Area`);

class Production_line extends Model {
  static get tableName() {
    return `production_line`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        name: { type: `string` },
        machineNumber: { type: `integer` },
        area_id: { type: `integer` }
      },
    };
  }

  static relationMappings = {
    area: {
      relation: Model.BelongsToOneRelation,
      modelClass: Area,
      join: {
        from: `production_line.area_id`,
        to: `area.id`,
      },
    }
  }

}

module.exports = Production_line;
