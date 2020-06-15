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
  return db.createTable('site', {
    id: { type: 'int', primaryKey: true },
    name: 'string',
    address: 'string',
    companyId: {
      type: 'int',
      foreignKey: {
        name: 'site_company_id_fk',
        table: 'company',
        mapping: 'id',
        rules: { onDelete: 'NO ACTION'}
      },
    },
  });
};

exports.down = function (db) {
  return db.dropTable('site');
};

exports._meta = {
  "version": 1
};