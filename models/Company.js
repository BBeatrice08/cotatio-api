
const { Model } = require(`objection`);

class Company extends Model {
  static get tableName() {
    return `company`;
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

}

module.exports = Company;
