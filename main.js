
const sheetID ="100qQoIcKg2L2TTRjjEwimTeGiT_wnrp66IskS4nIBOw";


const link = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`;

fetch(link).then(res => res.json()).then(showVenue);


function showVenue(data){
	console.log(data)
	const myArray = data.feed.entry;
	myArray.forEach(showEvent);
}

function showEvent(venueData){
//	const template = document.querySelector("template").content;
//	const copy = template.cloneNode(true);
//	copy.querySelector("h1").textContent = venueData.gsx$address.$t;
//	console.log(venueData.gsx$address)
//	document.querySelector("header").appendChild(copy);
}

