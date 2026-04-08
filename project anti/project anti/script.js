document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS Animation Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true, // Animation only happens once when scrolling down
            offset: 50, // Point at which animation triggers
            duration: 800, // Timing (800ms)
            easing: 'ease-in-out', 
        });
    }

    // Add extra shadow to header on scroll
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                mainNav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
            } else {
                mainNav.style.boxShadow = "none";
            }
        });
    }

    console.log("MediCare Clinic webpage initialized with animations.");
});
