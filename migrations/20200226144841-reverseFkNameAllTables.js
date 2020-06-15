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
  await db.renameColumn('area', 'id_site', 'site_id');
  await db.renameColumn('group', 'id_indicator', 'indicator_id');
  await db.renameColumn('item', 'id_group', 'group_id');
  await db.renameColumn('machine', 'id_production_line', 'production_line_id');
  await db.renameColumn('machine', 'id_company', 'company_id');
  await db.renameColumn('machine', 'id_site', 'site_id');
  await db.renameColumn('machine', 'id_area', 'area_id');
  await db.renameColumn('production_line', 'id_area', 'area_id');
  await db.renameColumn('quotation', 'id_machine', 'machine_id');
  await db.renameColumn('quotation', 'id_user', 'user_id');
  await db.renameColumn('quotation_item', 'id_quotation', 'quotation_id');
  await db.renameColumn('quotation_item', 'id_item', 'item_id');
  await db.renameColumn('site', 'id_company', 'company_id');
};

exports.down = async function(db) {
  await db.renameColumn('area', 'site_id', 'id_site');
  await db.renameColumn('group', 'indicator_id', 'id_indicator');
  await db.renameColumn('item', 'group_id', 'id_group');
  await db.renameColumn('machine', 'production_line_id', 'id_production_line');
  await db.renameColumn('machine', 'company_id', 'id_company');
  await db.renameColumn('machine', 'site_id', 'id_site');
  await db.renameColumn('machine', 'area_id', 'id_area');
  await db.renameColumn('production_line', 'area_id', 'id_area');
  await db.renameColumn('quotation', 'machine_id', 'id_machine');
  await db.renameColumn('quotation', 'user_id', 'id_user');
  await db.renameColumn('quotation_item', 'quotation_id', 'id_quotation');
  await db.renameColumn('quotation_item', 'item_id', 'id_item');
  await db.renameColumn('site', 'company_id', 'id_company');
};

exports._meta = {
  "version": 1
};
