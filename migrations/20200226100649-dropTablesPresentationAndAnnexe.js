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
  await db.dropTable('presentation');
  await db.dropTable('annexe');
};

exports.down = async function(db) {
  await db.createTable('presentation', {
    id: { type: 'int', primaryKey: true },
    description: 'text'
  });
  await db.createTable('annexe', {
    id: { type: 'int', primaryKey: true },
    description: 'text',
  });
};

exports._meta = {
  "version": 1
};
