const genId1 = require('rnop_xid');
const genId2 = require('nafz_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|3hHSuDvfdz|' + genId2()).digest('base64');
}


module.exports = generateKey;
