
const { Model } = require(`objection`);
const Indicator = require(`./Indicator`);
const Item = require(`./Item`);

class Group extends Model {
  static get tableName() {
    return `group`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        name: { type: `string` },
        indicator_id: {type: `integer` },        
      },
    };
  }

  static relationMappings = {
    indicators: {
      relation: Model.HasManyRelation,
      modelClass: Indicator,
      join: {
        from: `group.indicator_id`,
        to: `indicator.id`,
      },
      order: 'id'
    },
    items: {
      relation: Model.HasManyRelation,
      modelClass: Item,
      join: {
        from: 'group.id',
        to: 'item.group_id'
      },
      order: 'id'
    }
  }
}

module.exports = Group;
