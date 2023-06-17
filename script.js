const button = document.get

$('#startUp').click(function () {
    $(this).effect("shake", {distance: 5});
    var audio = document.getElementById('startSound');
    audio.play();
});

$('#lowBattery').click(function () {
    $(this).effect("shake", {distance: 5});
    var audio = document.getElementById('batterySound');
    audio.play();

});

$('#tada').click(function () {
    $(this).effect("shake", {distance: 5});
    var audio = document.getElementById('tadaSound');
    audio.play();
});

$('#exclamation').click(function () {
    $(this).effect("shake", {distance: 5});
    var audio = document.getElementById('exclamationSound');
    audio.play();
});

$('#logOff').click(function () {
    $(this).effect("shake", {distance: 5});
    var audio = document.getElementById('logOffSound');
    audio.play();
});