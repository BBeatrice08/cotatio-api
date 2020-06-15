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
  await db.changeColumn('company', 'name', {
    notNull: true,
  });
  await db.changeColumn('user', 'email', {
    notNull: true,
  });
  await db.changeColumn('user', 'password', {
    notNull: true,
  });
  await db.changeColumn('item', 'name', {
    notNull: true,
  });
  await db.changeColumn('item', 'description', {
    notNull: true,
  });
  await db.changeColumn('item', 'id_group', {
    notNull: true,
  });
  await db.changeColumn('group', 'name', {
    notNull: true,
  });
  await db.changeColumn('group', 'id_indicator', {
    notNull: true,
  });
  await db.changeColumn('indicator', 'name', {
    notNull: true,
  });
};

exports.down = async function(db) {
  await db.changeColumn('company', 'name', {
    notNull: false,
  });
  await db.changeColumn('user', 'email', {
    notNull: false,
  });
  await db.changeColumn('user', 'password', {
    notNull: false,
  });
  await db.changeColumn('item', 'name', {
    notNull: false,
  });
  await db.changeColumn('item', 'description', {
    notNull: false,
  });
  await db.changeColumn('item', 'id_group', {
    notNull: false,
  });
  await db.changeColumn('group', 'name', {
    notNull: false,
  });
  await db.changeColumn('group', 'id_indicator', {
    notNull: false,
  });
  await db.changeColumn('indicator', 'name', {
    notNull: false,
  });
};

exports._meta = {
  "version": 1
};
