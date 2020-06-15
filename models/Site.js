
const { Model } = require(`objection`);
const Company = require(`./Company`);

class Site extends Model {
  static get tableName() {
    return `site`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        name: { type: `string` },
        address: { type: `string` },
        postalCode: { type: `integer` },
        city: { type: `string` },
        company_id: {type: `integer` },        
      },
    };
  }

  static relationMappings = {
    company: {
      relation: Model.BelongsToOneRelation,
      modelClass: Company,
      join: {
        from: `site.company_id`,
        to: `company.id`,
      }
    }
  }
}

module.exports = Site;
