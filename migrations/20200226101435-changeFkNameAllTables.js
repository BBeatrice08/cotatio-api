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
  await db.renameColumn('site', 'companyId', 'id_company');
  await db.renameColumn('area', 'siteId', 'id_site');
  await db.renameColumn('production_line', 'areaId', 'id_area'); 
  await db.renameColumn('group', 'indicatorId', 'id_indicator');
  await db.renameColumn('item', 'groupId', 'id_group');
};

exports.down = async function(db) {
  await db.renameColumn('site', 'id_company', 'companyId');
  await db.renameColumn('area', 'id_site', 'siteId');
  await db.renameColumn('production_line', 'id_area', 'areaId'); 
  await db.renameColumn('group', 'id_indicator', 'indicatorId');
  await db.renameColumn('item', 'id_group', 'groupId');
};

exports._meta = {
  "version": 1
};
