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
  await db.addIndex('quotation_item', 'quotation_itemIndex', ['quotation_id', 'item_id'], 'unique');

};

exports.down = async function (db) {
  await db.removeIndex('quotation_item', 'quotation_itemIndex');
};

exports._meta = {
  "version": 1
};
