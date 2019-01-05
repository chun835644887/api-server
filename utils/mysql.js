const mysql = require('mysql');
const config = require('./mysql-config').config;

const _connect = mysql.createConnection(config);
const _query = (sql) => {
	return new Promise((resolve, reject) => {
		_connect.query(sql, (err, results, fields) => {
			if(err){
				resolve(err);
			}else{
				console.log(results,fields);
				resolve(results);
			}
		});
	});
};
exports.connect = _connect;
exports.query = _query;