function update() {
    document.title = "KxffieDev | " + karencount + " Karens";
    document.getElementById("karen_image").src = "/images/karen_1.png";
    document.getElementById("kps").innerHTML =
        (phoneclicker * phonemulticlicker);

    document.getElementById("karencount").innerHTML = karencount;

    document.getElementById("phoneamount").innerHTML = phoneamount;
    document.getElementById("phoneprice").innerHTML = phoneprice;
    document.getElementById("phonemultiamount").innerHTML = phonemultiamount;
    document.getElementById("phonemultiprice").innerHTML = phonemultiprice;
}

/* BASE STUFF */
var clickamount = 1;
var karencount = 0;

/* ITEMS/CLICKERS */
var phoneamount = 0;
var phoneprice = 15;
var phoneclicker = 0;

/* UPGRADES */
var phonemultiamount = 0;
var phonemultiprice = 100;
var phonemulticlicker = 1;

/* TIMER */
function timer() {
    karencount = karencount;
    update()
}
setInterval(timer, 1)

function timerPhone() {
    karencount = karencount + (phoneclicker * phonemulticlicker);
    update()
}
setInterval(timerPhone, 1000)

/* ADD */
function add() {
    karencount = karencount + clickamount;
    document.getElementById("karen_image").src = "/images/karen_2.png";
    update()
}

/* SHOP FUNCTIONS */

/* BUY PHONE AND MULTIPLIER */
function buyPhone() {
    if (karencount >= phoneprice) {
        karencount = karencount - phoneprice;
        phoneamount = phoneamount + 1;
        phoneclicker = phoneclicker + 1;
        phoneprice = phoneprice + (1 * phoneamount);
        update()
    }
}

function buyPhoneMulti() {
    if (karencount >= phonemultiprice) {
        karencount = karencount - phonemultiprice;
        phonemultiamount = phonemultiamount + 1;
        phonemulticlicker = phonemulticlicker + 1;
        phonemultiprice = phonemultiprice + (50 * phonemultiamount / 2);
        update()
    }
}