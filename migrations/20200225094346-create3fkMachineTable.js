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
	await db.addColumn('machine', 'id_company', {
		type: 'int',
		notNull: true,
		foreignKey: {
			name: 'machine_id_company_fk',
			table: 'company',
			mapping: 'id',
			rules: { onDelete: 'NO ACTION' },
		},
	});
    await db.addColumn('machine', 'id_site', {
		type: 'int',
		foreignKey: {
			name: 'machine_id_site_fk',
			table: 'site',
			mapping: 'id',
			rules: { onDelete: 'NO ACTION' }
		},
	});
  	await db.addColumn('machine', 'id_area', {
		type: 'int',
		foreignKey: {
			name: 'machine_id_area_fk',
			table: 'site',
			mapping: 'id',
			rules: { onDelete: 'NO ACTION' }
		},
	});
};

exports.down = async function (db) {
	await db.removeColumn('machine', 'id_company');
	await db.removeColumn('machine', 'id_site');
	await db.removeColumn('machine', 'id_area');
};

exports._meta = {
  "version": 1
};