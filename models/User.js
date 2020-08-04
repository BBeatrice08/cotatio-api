
const { Model } = require(`objection`);

class User extends Model {
  static get tableName() {
    return `user`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        firstName: { type: `string` },
        lastName: { type: `string` },
        email: { type: `string` },
        password: { type: `string` },
      },
    };
  }

}

module.exports = User;
