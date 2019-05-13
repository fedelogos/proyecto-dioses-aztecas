// console.log(aztec_gods);


function drawCard(dios) {
	var cardCont = document.createElement("div");
	cardCont.classList.add("flip_card_container");

	var card = document.createElement("div");
	card.classList.add("flip_card_sub_container");
}

function drawCardsRow() {
	// body...
}

var i = 0;
var cnt = document.getElementById('card_section_container');
var row;
var cardCont;
var card;
var txt;
aztec_gods.forEach(function (god) {

	if (i % 5 == 0) {
		row = document.createElement("div");
		row.classList.add('card_row');
		cnt.appendChild(row);
	}
	

	cardCont = document.createElement("div");
	cardCont.classList.add("flip_card_container");
	row.appendChild(cardCont);

	card = document.createElement("div");
	card.classList.add("flip_card_sub_container");
	cardCont.appendChild(card);

	// CARD_FRONT
	cardFront = document.createElement("div");
	cardFront.classList.add("flip_card_front");
	cardFront.style = "background-image:url('media/" + god.pictureLink1 + "');";
	card.appendChild(cardFront);


	cardFrontTitle = document.createElement("div");
	cardFrontTitle.classList.add("card_front_title");
	cardFront.appendChild(cardFrontTitle);

	txt = document.createTextNode(god.name);

	cardFrontTitle.appendChild(txt);

	cardFrontTitle = document.createElement("div");
	cardFrontTitle.classList.add("card_front_paragraph");
	cardFront.appendChild(cardFrontTitle);

	txt = document.createTextNode(god.alias);

	cardFrontTitle.appendChild(txt);
	// CARD_FRONT_END
	// CARD_BACK

	cardBack = document.createElement("div");
	cardBack.classList.add("flip_card_back");
	cardBack.style = "background-image:url('media/" + god.pictureLink2 + "');";

	card.appendChild(cardBack);

	cardBackTitle = document.createElement("div");
	cardBackTitle.classList.add("card_back_title");
	cardBack.appendChild(cardBackTitle);

	txt = document.createTextNode(god.name);

	cardBackTitle.appendChild(txt);

	cardBackTitle = document.createElement("div");
	cardBackTitle.classList.add("card_back_description");
	

	txt = document.createTextNode(god.description);
	cardBackTitle.appendChild(txt);
	cardBack.appendChild(cardBackTitle);

	// CARD_BACK_NED


	i++;
});