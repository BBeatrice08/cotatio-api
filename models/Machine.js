
const { Model } = require(`objection`);
const Production_line = require(`./Production_line`);

class Machine extends Model {
  static get tableName() {
    return `machine`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        name: { type: `string` },
        production_line_id: { type: `integer` },
        company_id: { type: `integer` },
        site_id: { type: `integer` },
        area_id: { type: `integer` }
      },
    };
  }

  static relationMappings = {
    production_line: {
      relation: Model.BelongsToOneRelation,
      modelClass: Production_line,
      join: {
        from: `machine.production_line_id`,
        to: `production_line.id`,
      },
    }
  }
}

module.exports = Machine;
