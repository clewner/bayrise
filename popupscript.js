var hasPopupBeenShown = false;

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowSize = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;

    // Check if we've scrolled past the starting page and if the popup hasn't been shown yet
    if(scrollPosition > windowSize && !hasPopupBeenShown) {
        showPopup();
        // Mark the popup as shown
        hasPopupBeenShown = true;
    }
});

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Assuming your button click event is already setup correctly
document.getElementById('yourButtonId').addEventListener('click', function() {
    if (!hasPopupBeenShown) {
        showPopup();
        // Mark the popup as shown
        hasPopupBeenShown = true;
    }
});
