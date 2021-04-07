const path = require('path');
const fse = require('fs-extra');
const { Proskomma } = require('proskomma');


const pkWithDocs = (contentSpecs) => {
	const pk = new Proskomma();
  
	for (const [fp, selectors] of contentSpecs) {
	  const content = fse.readFileSync(path.resolve(__dirname, fp));
	  let contentType = fp.split('.').pop();
  
	  if (contentType === 'xml') {
		contentType = 'lexicon';
	  }
	  pk.importDocument(
		selectors,
		contentType,
		content,
		{},
	  );
	}
	return pk;
};
  
const istart = Date.now();
const pk = pkWithDocs([
	['01-GEN.usfm', {lang: 'eng',abbr: 'lt'}],
	['02-EXO.usfm', {lang: 'eng',abbr: 'lt'}],
	['03-LEV.usfm', {lang: 'eng',abbr: 'lt'}],
	['04-NUM.usfm', {lang: 'eng',abbr: 'lt'}],
	['05-DEU.usfm', {lang: 'eng',abbr: 'lt'}],
	['06-JOS.usfm', {lang: 'eng',abbr: 'lt'}],
	['07-JDG.usfm', {lang: 'eng',abbr: 'lt'}],
	['08-RUT.usfm', {lang: 'eng',abbr: 'lt'}],
	['09-1SA.usfm', {lang: 'eng',abbr: 'lt'}],
	['10-2SA.usfm', {lang: 'eng',abbr: 'lt'}],
	['11-1KI.usfm', {lang: 'eng',abbr: 'lt'}],
	['12-2KI.usfm', {lang: 'eng',abbr: 'lt'}],
	['13-1CH.usfm', {lang: 'eng',abbr: 'lt'}],
	['14-2CH.usfm', {lang: 'eng',abbr: 'lt'}],
	['15-EZR.usfm', {lang: 'eng',abbr: 'lt'}],
	['16-NEH.usfm', {lang: 'eng',abbr: 'lt'}],
	['17-EST.usfm', {lang: 'eng',abbr: 'lt'}],
	['18-JOB.usfm', {lang: 'eng',abbr: 'lt'}],
	['19-PSA.usfm', {lang: 'eng',abbr: 'lt'}],
	['20-PRO.usfm', {lang: 'eng',abbr: 'lt'}],
	['21-ECC.usfm', {lang: 'eng',abbr: 'lt'}],
	['22-SNG.usfm', {lang: 'eng',abbr: 'lt'}],
	['23-ISA.usfm', {lang: 'eng',abbr: 'lt'}],
	['24-JER.usfm', {lang: 'eng',abbr: 'lt'}],
	['25-LAM.usfm', {lang: 'eng',abbr: 'lt'}],
	['26-EZK.usfm', {lang: 'eng',abbr: 'lt'}],
	['27-DAN.usfm', {lang: 'eng',abbr: 'lt'}],
	['28-HOS.usfm', {lang: 'eng',abbr: 'lt'}],
	['29-JOL.usfm', {lang: 'eng',abbr: 'lt'}],
	['30-AMO.usfm', {lang: 'eng',abbr: 'lt'}],
	['31-OBA.usfm', {lang: 'eng',abbr: 'lt'}],
	['32-JON.usfm', {lang: 'eng',abbr: 'lt'}],
	['33-MIC.usfm', {lang: 'eng',abbr: 'lt'}],
	['34-NAM.usfm', {lang: 'eng',abbr: 'lt'}],
	['35-HAB.usfm', {lang: 'eng',abbr: 'lt'}],
	['36-ZEP.usfm', {lang: 'eng',abbr: 'lt'}],
	['37-HAG.usfm', {lang: 'eng',abbr: 'lt'}],
	['38-ZEC.usfm', {lang: 'eng',abbr: 'lt'}],
	['39-MAL.usfm', {lang: 'eng',abbr: 'lt'}],
	['41-MAT.usfm', {lang: 'eng',abbr: 'lt'}],
	['42-MRK.usfm', {lang: 'eng',abbr: 'lt'}],
	['43-LUK.usfm', {lang: 'eng',abbr: 'lt'}],
	['44-JHN.usfm', {lang: 'eng',abbr: 'lt'}],
	['45-ACT.usfm', {lang: 'eng',abbr: 'lt'}],
	['46-ROM.usfm', {lang: 'eng',abbr: 'lt'}],
	['47-1CO.usfm', {lang: 'eng',abbr: 'lt'}],
	['48-2CO.usfm', {lang: 'eng',abbr: 'lt'}],
	['49-GAL.usfm', {lang: 'eng',abbr: 'lt'}],
	['50-EPH.usfm', {lang: 'eng',abbr: 'lt'}],
	['51-PHP.usfm', {lang: 'eng',abbr: 'lt'}],
	['52-COL.usfm', {lang: 'eng',abbr: 'lt'}],
	['53-1TH.usfm', {lang: 'eng',abbr: 'lt'}],
	['54-2TH.usfm', {lang: 'eng',abbr: 'lt'}],
	['55-1TI.usfm', {lang: 'eng',abbr: 'lt'}],
	['56-2TI.usfm', {lang: 'eng',abbr: 'lt'}],
	['57-TIT.usfm', {lang: 'eng',abbr: 'lt'}],
	['58-PHM.usfm', {lang: 'eng',abbr: 'lt'}],
	['59-HEB.usfm', {lang: 'eng',abbr: 'lt'}],
	['60-JAS.usfm', {lang: 'eng',abbr: 'lt'}],
	['61-1PE.usfm', {lang: 'eng',abbr: 'lt'}],
	['62-2PE.usfm', {lang: 'eng',abbr: 'lt'}],
	['63-1JN.usfm', {lang: 'eng',abbr: 'lt'}],
	['64-2JN.usfm', {lang: 'eng',abbr: 'lt'}],
	['65-3JN.usfm', {lang: 'eng',abbr: 'lt'}],
	['66-JUD.usfm', {lang: 'eng',abbr: 'lt'}],
	['67-REV.usfm', {lang: 'eng',abbr: 'lt'}],
]);
console.log("Import time:", Math.floor((Date.now() - istart) / 1000));


const query = '{ docSets { id } }';
const qstart = Date.now();
pk.gqlQuery(query)
	.then( (results) => {
		console.log("Query time:", Math.floor((Date.now() - qstart) / 1000));
		const sstart = Date.now();
		const serialized = pk.serializeSuccinct( results.data.docSets[0].id );
		console.log("Serialization time:", Math.floor((Date.now() - sstart) / 1000));
		const jstart = Date.now();
		const stringifySerialization = JSON.stringify(serialized);
		console.log("Stringify time:", Math.floor((Date.now() - jstart) / 1000));
		const wstart = Date.now();
		fse.writeFileSync('en_ult-succinct.json', stringifySerialization);
		console.log("File write time:", Math.floor((Date.now() - wstart) / 1000));
	})
	.catch( err => console.log(err) )

/*
	['01-GEN.usfm', {lang: 'eng',abbr: 'lt'}],
	['02-EXO.usfm', {lang: 'eng',abbr: 'lt'}],
	['03-LEV.usfm', {lang: 'eng',abbr: 'lt'}],
	['04-NUM.usfm', {lang: 'eng',abbr: 'lt'}],
	['05-DEU.usfm', {lang: 'eng',abbr: 'lt'}],
	['06-JOS.usfm', {lang: 'eng',abbr: 'lt'}],
	['07-JDG.usfm', {lang: 'eng',abbr: 'lt'}],
	['08-RUT.usfm', {lang: 'eng',abbr: 'lt'}],
	['09-1SA.usfm', {lang: 'eng',abbr: 'lt'}],
	['10-2SA.usfm', {lang: 'eng',abbr: 'lt'}],
	['11-1KI.usfm', {lang: 'eng',abbr: 'lt'}],
	['12-2KI.usfm', {lang: 'eng',abbr: 'lt'}],
	['13-1CH.usfm', {lang: 'eng',abbr: 'lt'}],
	['14-2CH.usfm', {lang: 'eng',abbr: 'lt'}],
	['15-EZR.usfm', {lang: 'eng',abbr: 'lt'}],
	['16-NEH.usfm', {lang: 'eng',abbr: 'lt'}],
	['17-EST.usfm', {lang: 'eng',abbr: 'lt'}],
	['18-JOB.usfm', {lang: 'eng',abbr: 'lt'}],
	['19-PSA.usfm', {lang: 'eng',abbr: 'lt'}],
	['20-PRO.usfm', {lang: 'eng',abbr: 'lt'}],
	['21-ECC.usfm', {lang: 'eng',abbr: 'lt'}],
	['22-SNG.usfm', {lang: 'eng',abbr: 'lt'}],
	['23-ISA.usfm', {lang: 'eng',abbr: 'lt'}],
	['24-JER.usfm', {lang: 'eng',abbr: 'lt'}],
	['25-LAM.usfm', {lang: 'eng',abbr: 'lt'}],
	['26-EZK.usfm', {lang: 'eng',abbr: 'lt'}],
	['27-DAN.usfm', {lang: 'eng',abbr: 'lt'}],
	['28-HOS.usfm', {lang: 'eng',abbr: 'lt'}],
	['29-JOL.usfm', {lang: 'eng',abbr: 'lt'}],
	['30-AMO.usfm', {lang: 'eng',abbr: 'lt'}],
	['31-OBA.usfm', {lang: 'eng',abbr: 'lt'}],
	['32-JON.usfm', {lang: 'eng',abbr: 'lt'}],
	['33-MIC.usfm', {lang: 'eng',abbr: 'lt'}],
	['34-NAM.usfm', {lang: 'eng',abbr: 'lt'}],
	['35-HAB.usfm', {lang: 'eng',abbr: 'lt'}],
	['36-ZEP.usfm', {lang: 'eng',abbr: 'lt'}],
	['37-HAG.usfm', {lang: 'eng',abbr: 'lt'}],
	['38-ZEC.usfm', {lang: 'eng',abbr: 'lt'}],
	['39-MAL.usfm', {lang: 'eng',abbr: 'lt'}],
	['41-MAT.usfm', {lang: 'eng',abbr: 'lt'}],
	['42-MRK.usfm', {lang: 'eng',abbr: 'lt'}],
	['43-LUK.usfm', {lang: 'eng',abbr: 'lt'}],
	['44-JHN.usfm', {lang: 'eng',abbr: 'lt'}],
	['45-ACT.usfm', {lang: 'eng',abbr: 'lt'}],
	['46-ROM.usfm', {lang: 'eng',abbr: 'lt'}],
	['47-1CO.usfm', {lang: 'eng',abbr: 'lt'}],
	['48-2CO.usfm', {lang: 'eng',abbr: 'lt'}],
	['49-GAL.usfm', {lang: 'eng',abbr: 'lt'}],
	['50-EPH.usfm', {lang: 'eng',abbr: 'lt'}],
	['51-PHP.usfm', {lang: 'eng',abbr: 'lt'}],
	['52-COL.usfm', {lang: 'eng',abbr: 'lt'}],
	['53-1TH.usfm', {lang: 'eng',abbr: 'lt'}],
	['54-2TH.usfm', {lang: 'eng',abbr: 'lt'}],
	['55-1TI.usfm', {lang: 'eng',abbr: 'lt'}],
	['56-2TI.usfm', {lang: 'eng',abbr: 'lt'}],
	['57-TIT.usfm', {lang: 'eng',abbr: 'lt'}],
	['58-PHM.usfm', {lang: 'eng',abbr: 'lt'}],
	['59-HEB.usfm', {lang: 'eng',abbr: 'lt'}],
	['60-JAS.usfm', {lang: 'eng',abbr: 'lt'}],
	['61-1PE.usfm', {lang: 'eng',abbr: 'lt'}],
	['62-2PE.usfm', {lang: 'eng',abbr: 'lt'}],
	['63-1JN.usfm', {lang: 'eng',abbr: 'lt'}],
	['64-2JN.usfm', {lang: 'eng',abbr: 'lt'}],
	['65-3JN.usfm', {lang: 'eng',abbr: 'lt'}],
	['66-JUD.usfm', {lang: 'eng',abbr: 'lt'}],
	['67-REV.usfm', {lang: 'eng',abbr: 'lt'}],
*/