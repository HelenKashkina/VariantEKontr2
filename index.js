document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
$("#camera-btn").click(getPicture);
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}
function getPicture() {
    navigator.camera.getPicture(succesCameraCallback, errorCameraCallback, {
        quality: 25,
        destinationType: Camera.DestinationType.DATA_URL
    });
}
function succesCameraCallback(imageData) {
    $('#myImage').attr('src', 'data:image/jpeg;base64,' + imageData);
}
function errorCameraCallback(message) {
    alert(message);
}
