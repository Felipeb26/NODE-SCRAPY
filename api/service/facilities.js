const ifNull = (s) => {
	if (s != undefined || null) {
		return s;
	} else {
		return null;
	}
};

function getElementByXpath(path) {
	return document.evaluate(
		path,
		document,
		null,
		XPathResult.FIRST_ORDERED_NODE_TYPE,
		null
	).singleNodeValue;
}


module.exports = {
    ifNull,
	getElementByXpath
}