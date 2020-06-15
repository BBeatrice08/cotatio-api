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

const tableName = `quotation`;

exports.up = async function(db) {
  const res = await db.runSql(`SELECT MAX(id)+1 AS maxid FROM "${tableName}"`);
  const maxId = res.rows[0].maxid || 0;
  await db.runSql(`CREATE SEQUENCE ${tableName}_id_seq MINVALUE ${maxId}`);
  await db.runSql(`ALTER TABLE "${tableName}" ALTER id SET DEFAULT nextval('${tableName}_id_seq')`);
  await db.runSql(`ALTER SEQUENCE ${tableName}_id_seq OWNED BY "${tableName}".id`);
};

exports.down = async function(db) {
  await db.runSql(`ALTER TABLE "${tableName}" ALTER COLUMN id DROP DEFAULT`);
  await db.runSql(`DROP SEQUENCE ${tableName}_id_seq`);
};

exports._meta = {
  "version": 1
};
