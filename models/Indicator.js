
const { Model } = require(`objection`);
const Group = require(`./Group`);

class Indicator extends Model {
  static get tableName() {
    return `indicator`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        name: { type: `string` },
      },
    };
  }

  static relationMappings = {
    groups: {
      relation: Model.HasManyRelation,
      modelClass: Group,
      join: {
        from: 'indicator.id',
        to: 'group.indicator_id'
      }
    },
    order: 'id'
  };
}

module.exports = Indicator;
