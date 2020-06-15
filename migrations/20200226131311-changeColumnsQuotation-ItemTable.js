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
  await db.renameColumn('quotation_item', 'quotationId', 'id_quotation');
  await db.renameColumn('quotation_item', 'itemId', 'id_item');
  await db.renameColumn('quotation_item', 'note', 'score');
  await db.changeColumn('quotation_item', 'isConcerned', {
    notNull: true,
  });
  await db.changeColumn('quotation_item', 'id_item', {
    notNull: true,
  });
};

exports.down = async function(db) {
  await db.renameColumn('quotation_item', 'id_quotation', 'quotationId');
  await db.renameColumn('quotation_item', 'id_item', 'itemId');
  await db.renameColumn('quotation_item', 'score', 'note');
  await db.changeColumn('quotation_item', 'isConcerned', {
    notNull: false,
  });
  await db.changeColumn('quotation_item', 'itemId', {
    notNull: false,
  });
};

exports._meta = {
  "version": 1
};
