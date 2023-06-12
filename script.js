

$('#startUp').click(function () {
    var audio = document.getElementById('startSound');
    audio.play();
});

$('#lowBattery').click(function () {
    var audio = document.getElementById('batterySound');

    audio.play();

});

$('#tada').click(function () {
    var audio = document.getElementById('tadaSound');
    audio.play();
});

$('#exclamation').click(function () {
    var audio = document.getElementById('exclamationSound');
    audio.play();
});

$('#logOff').click(function () {
    var audio = document.getElementById('logOffSound');
    audio.play();
});