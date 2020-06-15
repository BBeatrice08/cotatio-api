
const { Model } = require(`objection`);
const Site = require(`./Site`);

class Area extends Model {
  static get tableName() {
    return `area`;
  }

  static get jsonSchema() {
    return {
      type: `object`,

      properties: {
        id: { type: `integer` },
        name: { type: `string` },
        site_id: { type: `integer` },
      },
    };
  }

  static relationMappings = {
    site: {
      relation: Model.BelongsToOneRelation,
      modelClass: Site,
      join: {
        from: `area.site_id`,
        to: `site.id`,
      },
    }
  }
}

module.exports = Area;