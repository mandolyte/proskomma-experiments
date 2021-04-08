const path = require('path');
const fse = require('fs-extra');
const { Proskomma } = require('proskomma');

// create the instance
pk = new Proskomma();
// load the succinct file
const lstart = Date.now();
pk.loadSuccinctDocSet(fse.readJsonSync('en_ult-succinct.json'));
console.log("Load time:", Math.floor((Date.now() - lstart) / 1000));

const query = `{
	processor
	packageVersion
	documents(withBook: "TIT") {
		cv (chapter:"1" verses:["1"]) 
			{ text }
	}
}`

const qstart = Date.now();
pk.gqlQuery(query)
	.then( (results) => {
		console.log("Query time:", Math.floor((Date.now() - qstart) / 1000));
		console.log("Query results:\n",results);
	})
	.catch( err => console.log(err) )
