document.addEventListener("DOMContentLoaded", function() {

    // Initialize AOS Animation Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true, offset: 50, duration: 800, easing: 'ease-in-out',
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

    // Action buttons interaction
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
            this.disabled = true;
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 800);
        });
    });

    // Dark button interaction
    const darkBtns = document.querySelectorAll('.dark-btn');
    darkBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.opacity = '0.7';
            setTimeout(() => { this.style.opacity = '1'; }, 300);
        });
    });

    // Language switch
    const langBtn = document.querySelector('.lang-btn');
    if(langBtn) {
        langBtn.addEventListener('click', function() {
            const span = this.querySelector('span');
            if (span.innerText === 'عربي') {
                span.innerText = 'EN';
            } else {
                span.innerText = 'عربي';
            }
        });
    }

    // ===== Dashboard Charts Initialization =====

    // 1. Patient Arrival Analytics Chart
    const arrivalCtx = document.getElementById('arrivalAnalyticsChart');
    if (arrivalCtx) {
        new Chart(arrivalCtx, {
            type: 'bar',
            data: {
                labels: ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'],
                datasets: [{
                    label: 'Arrivals',
                    data: [5, 12, 18, 15, 8, 4, 10, 14, 16, 9, 5],
                    backgroundColor: 'rgba(45, 201, 177, 0.7)',
                    borderColor: '#2dc9b1',
                    borderWidth: 1,
                    borderRadius: 5,
                    barThickness: 25
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#94a3b8' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#94a3b8' }
                    }
                }
            }
        });
    }

    // 2. Registration & Visit Volume Chart
    const regCtx = document.getElementById('regTrendChart');
    if (regCtx) {
        new Chart(regCtx, {
            type: 'line',
            data: {
                labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [
                    {
                        label: 'New Patients',
                        data: [5, 12, 18, 15, 22, 10, 8],
                        borderColor: '#2dc9b1',
                        backgroundColor: 'rgba(45, 201, 177, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3
                    },
                    {
                        label: 'Visits Recorded',
                        data: [25, 45, 60, 55, 75, 40, 30],
                        borderColor: '#0ea5e9',
                        backgroundColor: 'transparent',
                        fill: false,
                        tension: 0.4,
                        borderWidth: 2,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                        ticks: { color: '#94a3b8' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#94a3b8' }
                    }
                },
                plugins: {
                    legend: { position: 'top', align: 'end', labels: { usePointStyle: true, color: '#94a3b8' } }
                }
            }
        });
    }

    // 3. Visit Breakdown Doughnut Chart
    const visitCtx = document.getElementById('visitBreakdownChart');
    if (visitCtx) {
        new Chart(visitCtx, {
            type: 'doughnut',
            data: {
                labels: ['Cardiology', 'Pediatrics', 'General', 'Others'],
                datasets: [{
                    data: [42, 28, 20, 10],
                    backgroundColor: [
                        '#2dc9b1',
                        '#0ea5e9',
                        '#6366f1',
                        '#1e293b'
                    ],
                    borderWidth: 0,
                    hoverOffset: 15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: { position: 'bottom', labels: { usePointStyle: true, color: '#94a3b8', padding: 20 } }
                }
            }
        });
    }

    console.log("MediCare Assistant Portal initialized.");
});
