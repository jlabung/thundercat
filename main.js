

const sheetID = "100qQoIcKg2L2TTRjjEwimTeGiT_wnrp66IskS4nIBOw";



const link = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`;

fetch(link).then(res => res.json()).then(showVenue);


function showVenue(data) {
	console.log(data)
	const myArray = data.feed.entry;
	myArray.forEach(showEvent);
}


function showEvent(venueData) {
	const template = document.querySelector("template").content;
	const copy = template.cloneNode(true);
	copy.querySelector(".venue_name").textContent = venueData.gsx$venue.$t;


copy.querySelector(".data_img").src = `/img/${venueData.gsx$logo.$t}.jpg`;
	console.log(venueData.gsx$logo.$t)

	copy.querySelector(".artist_name").textContent = venueData.gsx$eventname.$t;

	copy.querySelector(".eventDate").textContent = venueData.gsx$eventdate.$t;

	copy.querySelector(".eventDescription").textContent = venueData.gsx$description.$t;

	copy.querySelector(".eventAddress").textContent = venueData.gsx$address.$t;

    document.querySelector(".cloneshere").appendChild(copy);


}
