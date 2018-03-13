var Long = require("long");
var MurmurHash = require('node-murmurhash3');

function stringedHash(sku, seed) {
    var high = MurmurHash.hash(sku , seed);
    var reversed = sku.split("").reverse().join("");
    var low = MurmurHash.hash(reversed, seed);
    var long = new Long(low, high);
    return long.toString();
}


module.exports = {
    hash: stringedHash,
};