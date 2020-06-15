
const { Model } = require(`objection`);
const Quotation = require(`./Quotation`);
const Item = require(`./Item`);

class Quotation_Item extends Model {
  static get tableName() {
    return `quotation_item`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        isConcerned: { type: `boolean` },
        score: { type: `integer` },
        comment: { type: `char` },
        quotation_id: { type: `integer` },
        item_id: { type: `integer` }
      },
    };
  }

  static relationMappings = {
    quotations: {
      relation: Model.BelongsToOneRelation,
      modelClass: Quotation,
      join: {
        from: `quotation_item.quotation_id`,
        to: `quotation.id`,
      },
    },
    items: {
      relation: Model.BelongsToOneRelation,
      modelClass: Item,
      join: {
        from: `quotation_item.item_id`,
        to: `item.id`,
      },
    }
  }
}

module.exports = Quotation_Item;
