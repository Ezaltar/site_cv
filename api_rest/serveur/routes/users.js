var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
	global.connection.query('SELECT * from users', function (error, results, fields) {
		if (error) throw error;
		//res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
		res.send(JSON.stringify(results));
	});
});

module.exports = router;


