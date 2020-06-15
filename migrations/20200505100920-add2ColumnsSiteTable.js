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

exports.up = async function(db) {
  await db.addColumn('site', 'postalCode', {
    type: 'int',
    notNull: false,
  });
  await db.addColumn('site', 'city', {
    type: 'string',
    notNull: false,
  });
};

exports.down = async function(db) {
  await db.removeColumn('site', 'postalCode');
  await db.removeColumn('site', 'city');
};

exports._meta = {
  "version": 1
};
