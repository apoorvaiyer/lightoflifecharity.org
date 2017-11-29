function showpopup(intro) {
    var begin = 'popup' + intro;
    document.getElementById(begin).style.display = "block";
}
function hidepopup(intro) {
    var begin = 'popup' + intro;
    document.getElementById(begin).style.display = "none";
}

function submitSubscription(specifiedPeriod) {
    var hiddenSponsorshipElement = document.getElementById('sponsorship-value');
    hiddenSponsorshipElement.value = specifiedPeriod;
    document.getElementById('donate-form').submit();
    return true;
}