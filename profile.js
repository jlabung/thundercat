const profileID = "1OAaQkVzxQfBTnI-BBHuOmtLOrl_oQTBozRTsF0WvxDY";



const profileLink = `https://spreadsheets.google.com/feeds/list/${profileID}/od6/public/values?alt=json`;

fetch(profileLink).then(res => res.json()).then(showVenue);


function showVenue(data) {
	console.log(data)
	const myArray = data.feed.entry;
	myArray.forEach(showEvent);
}


function showEvent(venueData) {
	const template = document.querySelector("template").content;
	const copy = template.cloneNode(true);



	//		copy.querySelector(".data_date").textContent = venueData.gsx$address.$t;	console.log(venueData.gsx$address)


	copy.querySelector(".profile").textContent = venueData.gsx$profile.$t;

	copy.querySelector(".profilepicture").src = "img/" + venueData.gsx$profilepicture.$t + ".jpg";
	console.log(venueData.gsx$profilepicture.$t)
	copy.querySelector(".profilename").textContent = venueData.gsx$profilename.$t;

	copy.querySelector(".profileinfo").textContent = venueData.gsx$profileinfo.$t;

	copy.querySelector(".musicinfo").textContent = venueData.gsx$musicinfo.$t;


	copy.querySelector("button").addEventListener("click", function () {
		modal.classList.remove("hide");
	})


	document.querySelector(".showclones").appendChild(copy);

}
const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
	modal.classList.add("hide");

//modal.querySelector(".pickoftheweek").textContent = venueData.gsx$pickoftheweek;

});

/*
const button = document.querySelector("button");
console.log(button);
button.addEventListener("click", () => {
	modal.classList.remove("hide")
})*/
