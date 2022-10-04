// JavaScript Document

// Hamburger Menu
var navigation = document.querySelector('header nav:nth-of-type(2)');
var openButton = document.querySelector('header nav:nth-of-type(1) button');
var closeButton = document.querySelector('header nav:nth-of-type(2) button');

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

function toggleMenu() {
	navigation.classList.toggle('show');
	setTimeout(function() {navigation.classList.toggle('open')}, 1);
}

// Buy en Like buttons

var buyButtons = document.querySelectorAll('.buy');
var likeButtons = document.querySelectorAll('.like');
var shoppingCartAmount = document.querySelector('.winkelwagen span');
var wishlistAmount = document.querySelector('.favorieten span');

var currentCartAmount;
var currentWishlistAmount;

buyButtons.forEach(buyButton => buyButton.addEventListener("click", addToShoppingCart));

likeButtons.forEach(likeButton => likeButton.addEventListener("click", addToFavorites));


// Winkelwagen

function addToShoppingCart() {

	currentCartAmount = parseInt(shoppingCartAmount.innerHTML);
	newCartAmount = currentCartAmount + 1;
	shoppingCartAmount.innerHTML = newCartAmount;

	if(newCartAmount == 0) {
		shoppingCartAmount.style.display = 'none';
	} else {
		shoppingCartAmount.style.display = 'flex';
	}

	// Lasers

	// Bron voor audio: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

	// Bron laser geluidje: https://freesound.org/people/jobro/sounds/35681/

	var laserSound = new Audio('/frontend-development/sounds/laser.wav');

	// Bron voor coördinaten: https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element

	var cart = document.querySelector('.winkelwagen').getBoundingClientRect();

	var buttonX = event.target.getBoundingClientRect().left;
	var buttonY = event.target.getBoundingClientRect().top;
	var cartX = cart.left;
	var cartY =	cart.top;

	var Ydifference = Math.abs(buttonY - cartY);
	var Xdifference = Math.abs(buttonX - cartX);

	var laserLenght = Math.sqrt(Math.pow(Ydifference,2) + Math.pow(Xdifference,2));
	var laserAngle = Math.asin(Xdifference / laserLenght) * (180 / Math.PI);

	console.log("buttonX: " + buttonX + ", buttonY: " + buttonY + ", cartX: " + cartX + ", cartY: " + cartY + ", Ydifference: " + Ydifference + ", Xdifference: " + Xdifference + ", laserLenght: " + laserAngle + ", laserAngle: " + laserAngle)

	var laserbeam = document.querySelector('.laser');

	laserbeam.classList.add('on');


	laserSound.play();

	laserbeam.style.height = laserLenght + 'px';
	laserbeam.style.transform = 'rotate(' + laserAngle + 'deg)';

	window.setTimeout(function() {laserbeam.classList.remove('on')}, 490);
}


// Favorieten

function addToFavorites() {
	var clickedHeart = event.target;

	if (clickedHeart.tagName != 'BUTTON') {
		clickedHeart = clickedHeart.parentElement;
		if (clickedHeart.tagName != 'BUTTON') {
			clickedHeart = clickedHeart.parentElement;
		}
	}

	console.log(clickedHeart);
	
	currentWishlistAmount = parseInt(wishlistAmount.innerHTML);
 
	if (clickedHeart.parentElement.classList.contains("liked")) {
	newWishlistAmount = currentWishlistAmount - 1;
	wishlistAmount.innerHTML = newWishlistAmount;
	clickedHeart.parentElement.classList.remove("liked");
	} else {
	newWishlistAmount = currentWishlistAmount + 1;
	wishlistAmount.innerHTML = newWishlistAmount;
	clickedHeart.parentElement.classList.add("liked");
	}

	if(newWishlistAmount == 0) {
		wishlistAmount.style.display = 'none';
	} else {
		wishlistAmount.style.display = 'flex';
	}
	
}