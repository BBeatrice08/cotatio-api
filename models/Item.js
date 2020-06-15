
const { Model } = require(`objection`);
const Group = require(`./Group`);

class Item extends Model {
  static get tableName() {
    return `item`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        name: { type: `string` },
        description: { type: `string` },
        group_id: { type: `integer` },
        score_label_1: { type: `string` },
        score_label_2: { type: `string` },
        score_label_3: { type: `string` },
        score_label_: { type: `string` },
        indicator_id: {type: `integer` },        
      },
    };
  }

  static relationMappings = {
    groups: {
      relation: Model.HasManyRelation,
      modelClass: Group,
      join: {
        from: `item.group_id`,
        to: `group.id`,
      },
      order: 'id'
    },
  }
}

module.exports = Item;
