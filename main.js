const sheetID ="spreadsheets/d/100qQoIcKg2L2TTRjjEwimTeGiT_wnrp66IskS4nIBOw";

const link = "https://spreadsheets.google.com/feeds/list/YOUR_SHEET_ID/od6/public/values?alt=json";

fetch(link).then(res=>res.json()).then(showVenue);

function showVenue(data){
	console.log(data.feed.entry);

}
