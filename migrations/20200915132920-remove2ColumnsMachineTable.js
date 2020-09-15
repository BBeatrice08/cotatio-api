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
  await db.removeColumn('machine', 'ifSee');
  await db.removeColumn('machine', 'weightingScore');
};

exports.down = async function(db) {
  await db.addColumn('machine', 'ifSee', {
    type: 'boolean',
  }),
  ('machine', 'weightingScore', {
    type: 'int',
  });
};

exports._meta = {
  "version": 1
};
