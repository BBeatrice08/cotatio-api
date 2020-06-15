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
  return db.createTable('quotation', {
    id: { type: 'int', primaryKey: true },
    date: 'datetime',
    machineId: {
      type: 'int',
      foreignKey: {
        name: 'quotation_machine_id_fk',
        table: 'machine',
        mapping: 'id',
        rules: { onDelete: 'NO ACTION' },
      }
    },
    itemId: {
      type: 'int',
      foreignKey: {
        name: 'quotation_item_id_fk',
        table: 'item',
        mapping: 'id',
        rules: { onDelete: 'NO ACTION' },
      }
    },
    userId: {
      type: 'int',
      foreignKey: {
        name: 'quotation_user_id_fk',
        table: 'user',
        mapping: 'id',
        rules: { onDelete: 'NO ACTION' }
        }
      }
    }
  );
};

exports.down = function (db) {
  return db.dropTable('quotation');
};

exports._meta = {
  "version": 1
};
