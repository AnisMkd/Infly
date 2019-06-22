var EtatBtnAcceuil = 1;
var EtatBtnContact = 0;
var EtatBtnAbout = 0;


function mouseenterAcceuil() {
    if (EtatBtnAcceuil == 0) {
        document.getElementById("BtnAcceuil").style.backgroundColor = '#FF9366';
    }
}

function mouseenterContact() {
    if (EtatBtnContact == 0) {
        document.getElementById("BtnContact").style.backgroundColor = '#FF9366';
    }
}

function mouseenterAbout() {
    if (EtatBtnAbout == 0) {
        document.getElementById("BtnAbout").style.backgroundColor = '#FF9366';
    }
}

function mouseleaveAcceuil() {
    if (EtatBtnAcceuil == 0) {
        document.getElementById("BtnAcceuil").style.backgroundColor = '#EF8354';
    }
}

function mouseleaveContact() {
    if (EtatBtnContact == 0) {
        document.getElementById("BtnContact").style.backgroundColor = '#EF8354';
    }
}

function mouseleaveAbout() {
    if (EtatBtnAbout == 0) {
        document.getElementById("BtnAbout").style.backgroundColor = '#EF8354';
    }
}


function mouseenterAcceuilBottom() {
        document.getElementById("BtnAcceuilBottom").style.backgroundColor = '#FF9366';
    
}

function mouseenterContactBottom() {
        document.getElementById("BtnContactBottom").style.backgroundColor = '#FF9366';
    
}

function mouseenterAboutBottom() {
        document.getElementById("BtnAboutBottom").style.backgroundColor = '#FF9366';
    
}

function mouseleaveAcceuilBottom() {
        document.getElementById("BtnAcceuilBottom").style.backgroundColor = '#EF8354';

}

function mouseleaveContactBottom() {
        document.getElementById("BtnContactBottom").style.backgroundColor = '#EF8354';
    
}

function mouseleaveAboutBottom() {
        document.getElementById("BtnAboutBottom").style.backgroundColor = '#EF8354';

}


function clicAcceuil() {
    document.getElementById("BtnAcceuil").style.backgroundColor = '#80A1D4';
    document.getElementById("BtnContact").style.backgroundColor = '#EF8354';
    document.getElementById("BtnAbout").style.backgroundColor = '#EF8354';
    EtatBtnAcceuil = 1;
    EtatBtnContact = 0;
    EtatBtnAbout = 0;
}

function clicContact() {
    document.getElementById("BtnAcceuil").style.backgroundColor = '#EF8354';
    document.getElementById("BtnContact").style.backgroundColor = '#80A1D4';
    document.getElementById("BtnAbout").style.backgroundColor = '#EF8354';
    EtatBtnAcceuil = 0;
    EtatBtnContact = 1;
    EtatBtnAbout = 0;
}

function clicAbout() {
    document.getElementById("BtnAcceuil").style.backgroundColor = '#EF8354';
    document.getElementById("BtnContact").style.backgroundColor = '#EF8354';
    document.getElementById("BtnAbout").style.backgroundColor = '#80A1D4';
    EtatBtnAcceuil = 0;
    EtatBtnContact = 0;
    EtatBtnAbout = 1;
}


function clicAcceuilBottom() {
    document.getElementById("BtnAcceuil").style.backgroundColor = '#80A1D4';
    document.getElementById("BtnContact").style.backgroundColor = '#EF8354';
    document.getElementById("BtnAbout").style.backgroundColor = '#EF8354';
    EtatBtnAcceuil = 1;
    EtatBtnContact = 0;
    EtatBtnAbout = 0;
}

function clicContactBottom() {
    document.getElementById("BtnAcceuil").style.backgroundColor = '#EF8354';
    document.getElementById("BtnContact").style.backgroundColor = '#80A1D4';
    document.getElementById("BtnAbout").style.backgroundColor = '#EF8354';
    EtatBtnAcceuil = 0;
    EtatBtnContact = 1;
    EtatBtnAbout = 0;
}

function clicAboutBottom() {
    document.getElementById("BtnAcceuil").style.backgroundColor = '#EF8354';
    document.getElementById("BtnContact").style.backgroundColor = '#EF8354';
    document.getElementById("BtnAbout").style.backgroundColor = '#80A1D4';
    EtatBtnAcceuil = 0;
    EtatBtnContact = 0;
    EtatBtnAbout = 1;
}


document.getElementById("BtnAcceuil").addEventListener("click", clicAcceuil);
document.getElementById("BtnContact").addEventListener("click", clicContact);
document.getElementById("BtnAbout").addEventListener("click", clicAbout);


document.getElementById("BtnAcceuilBottom").addEventListener("click", clicAcceuilBottom);
document.getElementById("BtnContactBottom").addEventListener("click", clicContactBottom);
document.getElementById("BtnAboutBottom").addEventListener("click", clicAboutBottom);


document.getElementById("BtnAcceuil").addEventListener("mouseenter", mouseenterAcceuil);
document.getElementById("BtnContact").addEventListener("mouseenter", mouseenterContact);
document.getElementById("BtnAbout").addEventListener("mouseenter", mouseenterAbout);

document.getElementById("BtnAcceuil").addEventListener("mouseleave", mouseleaveAcceuil);
document.getElementById("BtnContact").addEventListener("mouseleave", mouseleaveContact);
document.getElementById("BtnAbout").addEventListener("mouseleave", mouseleaveAbout);


document.getElementById("BtnAcceuilBottom").addEventListener("mouseenter", mouseenterAcceuilBottom);
document.getElementById("BtnContactBottom").addEventListener("mouseenter", mouseenterContactBottom);
document.getElementById("BtnAboutBottom").addEventListener("mouseenter", mouseenterAboutBottom);

document.getElementById("BtnAcceuilBottom").addEventListener("mouseleave", mouseleaveAcceuilBottom);
document.getElementById("BtnContactBottom").addEventListener("mouseleave", mouseleaveContactBottom);
document.getElementById("BtnAboutBottom").addEventListener("mouseleave", mouseleaveAboutBottom);