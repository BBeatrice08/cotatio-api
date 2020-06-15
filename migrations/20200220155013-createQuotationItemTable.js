'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('quotation_item', {
    id: { type: 'int', primaryKey: true },
    isConcerned: 'boolean',
    note: 'int',
    comment: 'string',
    quotationId: {
      type: 'int',
      foreignKey: {
        name: 'quotation_item_quotation_id_fk',
        table: 'quotation',
        mapping: 'id',
        rules: { onDelete: 'NO ACTION' }
      }
    },
    itemId: {
      type: 'int',
      foreignKey: {
        name: 'quotation_item_item_id_fk',
        table: 'item',
        mapping: 'id',
        rules: { onDelete: 'NO ACTION' }
      }
    }
  });
};

exports.down = function (db) {
  return db.dropTable('quotation_item');
};

exports._meta = {
  "version": 1
};
