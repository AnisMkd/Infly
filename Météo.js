var latitude = "0";
var longitude = "0";


var callBackGetSuccess = function (data) {
    var Température = document.getElementById("zone_meteo_Temp");
    var Température_Temp_Max = document.getElementById("zone_meteo_Temp_Max");
    var Température_Temp_Min = document.getElementById("zone_meteo_Temp_Min");
    Température.innerHTML = Math.round(data.main.temp) + "°C";
    Température_Temp_Max.innerHTML = Math.round(data.main.temp_max) + "°C";
    Température_Temp_Min.innerHTML = Math.round(data.main.temp_min) + "°C";
    console.log(data.weather[0].icon);
}

var callBackGetSuccessGeolocation = function (data) {
    var Température = document.getElementById("zone_meteo_Temp");
    var Température_Temp_Max = document.getElementById("zone_meteo_Temp_Max");
    var Température_Temp_Min = document.getElementById("zone_meteo_Temp_Min");
    Température.innerHTML = Math.round(data.main.temp) + "°C";
    Température_Temp_Max.innerHTML = Math.round(data.main.temp_max) + "°C";
    Température_Temp_Min.innerHTML = Math.round(data.main.temp_min) + "°C";
}


function BtnActualiseClickGET() {
    var ValVille = document.getElementById("ville");
    var url = ("https://api.openweathermap.org/data/2.5/weather?q=" + ValVille.value + ",fr&appid=ea108f94d782f6ac139ea7e4d3525816&units=metric");

    $.get(url, callBackGetSuccess).done(function () {
            //alert( "second success" );
        })
        .fail(function () {
            document.getElementById("ville").value = "Recherche incorrect";
        })
        .always(function () {
            //alert( "finished" );
        });
}

function OuverturePage() {
    document.getElementById("ville").value = "Paris";
    BtnActualiseClickGET();
    geolocalisation();
    
}


function geolocalisation() {
    geolocalisation2();

    var url = ("https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=ea108f94d782f6ac139ea7e4d3525816&units=metric");

    $.get(url, callBackGetSuccessGeolocation).done(function () {
            //alert( "second success" );
        })
        .fail(function () {
            document.getElementById("ville").value = "Recherche incorrect";
        })
        .always(function () {
            //alert( "finished" );
        });
}

function geolocalisation2() {
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    else
        alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");



    function successCallback(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        rechercheville();

    };



    function errorCallback(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("L'utilisateur n'a pas autorisé l'accès à sa position");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("L'emplacement de l'utilisateur n'a pas pu être déterminé");
                break;
            case error.TIMEOUT:
                alert("Le service n'a pas répondu à temps");
                break;
        }
    };
}

var callBackGetSuccessGeolocation2 = function (data) {
    document.getElementById("ville").value = (data.address.town);
    BtnActualiseClickGET();
}

function rechercheville() {
    url = ("https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitude + "&lon=" + longitude + "&zoom=18&addressdetails=1");
    $.get(url, callBackGetSuccessGeolocation2).done(function () {
            //alert( "second success" );
        })
        .fail(function () {
            document.getElementById("ville").value = "Recherche incorrect";
        })
        .always(function () {
            //alert( "finished" );
        });


}
