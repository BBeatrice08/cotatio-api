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

exports.up = async function (db) {
  await db.createTable('session', {
    id: { type: 'int', primaryKey: true },
    date: 'datetime',
    user_email: 'string',
    user_password: 'string'
  });

  await db.addIndex('user', 'userIndex', ['email', 'password'], 'unique');

  await db.addForeignKey('session', 'user', 'session_user_fk', {
    'user_email': 'email',
    'user_password': 'password'
    },
    { 
      onDelete: 'NO ACTION' 
    }
  );
};

exports.down = async function (db) {
  await db.dropTable('session');
};

exports._meta = {
  "version": 1
};
