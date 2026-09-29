const subscribeButton = document.getElementById("subscribeButton");
const paymentPopup = document.getElementById("paymentPopup");
const closePopup = document.getElementById("closePopup");
const confirmSubscribe = document.getElementById("confirmSubscribe");
const declineSubscribe = document.getElementById("declineSubscribe");
const subscriptionMessage = document.getElementById("subscriptionMessage");

subscribeButton.addEventListener("click", function() {
    paymentPopup.style.display = "flex";
});

closePopup.addEventListener("click", function() {
    paymentPopup.style.display = "none";
});

declineSubscribe.addEventListener("click", function() {
    paymentPopup.style.display = "none";

    subscriptionMessage.textContent =
        "Belvo will remember this.";
});

confirmSubscribe.addEventListener("click", function() {
    paymentPopup.style.display = "none";

    subscribeButton.textContent = "Subscribed ✓";

    subscriptionMessage.textContent =
        "Payment accepted.";
});

paymentPopup.addEventListener("click", function(event) {

    if (event.target === paymentPopup) {
        paymentPopup.style.display = "none";
    }

});

const reportButton = document.getElementById("reportButton");
const reportPopup = document.getElementById("reportPopup");
const closeReportPopup = document.getElementById("closeReportPopup");
const submitReport = document.getElementById("submitReport");
const cancelReport = document.getElementById("cancelReport");

reportButton.addEventListener("click", function() {
    reportPopup.style.display = "flex";
});

closeReportPopup.addEventListener("click", function() {
    reportPopup.style.display = "none";
});

cancelReport.addEventListener("click", function() {
    reportPopup.style.display = "none";
});

submitReport.addEventListener("click", function() {
    reportPopup.style.display = "none";

    alert(
        "REPORT DENIED\n\nReported for reporting."
    );
});

reportPopup.addEventListener("click", function(event) {
    if (event.target === reportPopup) {
        reportPopup.style.display = "none";
    }
});