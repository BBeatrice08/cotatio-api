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
	await db.addColumn('item', 'id_indicator', {
		type: 'int',
		notNull: true,
		foreignKey: {
			name: 'item_id_indicator_fk',
			table: 'indicator',
			mapping: 'id',
			rules: { onDelete: 'NO ACTION' },
		},
	});
	await db.addColumn('item', 'score_label_1', {
		type: 'string',
		notNull: true,
	});
	await db.addColumn('item', 'score_label_2', {
		type: 'string',
		notNull: true,
	});
    await db.addColumn('item', 'score_label_3', {
		type: 'string',
		notNull: true,
  });
	await db.addColumn('item', 'score_label_4', {
		type: 'string',
		notNull: true,
	});
};

exports.down = async function(db) {
	await db.removeColumn('item', 'id_indicator');
	await db.removeColumn('item', 'score_label_1');
	await db.removeColumn('item', 'score_label_2');
	await db.removeColumn('item', 'score_label_3');
	await db.removeColumn('item', 'score_label_4');


};

exports._meta = {
  "version": 1
};
