
const { Model } = require(`objection`);

class Session extends Model {
  static get tableName() {
    return `session`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        date: { type: `timestamp` },
        user_email: { type: `string` },
        user_password: { type: `string` },
      },
    };
  }

}

module.exports = Session;
