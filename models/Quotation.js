
const { Model } = require(`objection`);
const Machine = require(`./Machine`);

class Quotation extends Model {
  static get tableName() {
    return `quotation`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        //date: { type: `timestamptz` },
        date: { type: `timestamp` },
        machine_id: { type: `integer `},
        user_id: { type: `integer `},
      },
    };
  }

  static relationMappings = {
    machine: {
      relation: Model.BelongsToOneRelation,
      modelClass: Machine,
      join: {
        from: `quotation.machine_id`,
        to: `machine.id`,
      },
    },
  }
}

module.exports = Quotation;
