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
	await db.removeColumn('item', 'indicator_id')
};
    
exports.down = async function (db) {
	await db.addColumn('item', 'indicator_id', {
		type: 'int',
		foreignKey: {
			name: 'item_indicator_id_fk',
			table: 'indicator',
			mapping: 'id',
			rules: { onDelete: 'NO ACTION' },
		},
	});	
};

exports._meta = {
  "version": 1
};