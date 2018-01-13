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

function submitOneTimePayment() {
    var oneTimePaymentForm = document.getElementById('single-donate-form');
    oneTimePaymentForm.submit();
    return true;
}

function setSticky(elem) {
    elem.classList.toggle('open');;
}