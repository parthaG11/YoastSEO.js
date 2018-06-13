const getNounForms = require( "./getNounForms.js" ).getNounForms;
const unique = require( "lodash/uniqBy" );

const getForms = function( word ) {
	let forms = [].concat( getNounForms( word ) );

	// Add call for verb forms here

	return unique( forms );
};

module.exports = getForms;