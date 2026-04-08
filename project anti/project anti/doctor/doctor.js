document.addEventListener("DOMContentLoaded", function() {

    // ===== Landing Page Scripts (from script.js) =====

    // Initialize AOS Animation Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
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

    // ===== Dashboard Scripts =====

    // Add simple interactivity to buttons
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
            setTimeout(() => {
                this.style.opacity = '1';
            }, 300);
        });
    });

    // Chat widget toggle
    const whatsappIcon = document.querySelector('.fa-whatsapp');
    if (whatsappIcon) {
        const chatBtn = whatsappIcon.parentNode.parentNode;
        if(chatBtn) {
            chatBtn.addEventListener('click', () => {
                alert("Opening Chat support...");
            });
        }
    }

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
    
    // 1. Weekly Appointment Volume Chart
    const weeklyCtx = document.getElementById('weeklyVolumeChart');
    if (weeklyCtx) {
        new Chart(weeklyCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Appointments',
                    data: [12, 19, 15, 22, 18, 10, 8],
                    backgroundColor: 'rgba(45, 201, 177, 0.7)',
                    borderColor: '#2dc9b1',
                    borderWidth: 1,
                    borderRadius: 5,
                    barThickness: 20
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

    // 2. Visit Distribution Chart
    const distCtx = document.getElementById('visitDistributionChart');
    if (distCtx) {
        new Chart(distCtx, {
            type: 'doughnut',
            data: {
                labels: ['Follow-up', 'Consultation', 'Emergency'],
                datasets: [{
                    data: [45, 35, 20],
                    backgroundColor: [
                        '#2dc9b1',
                        '#f59e0b',
                        '#ef4444'
                    ],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // 3. Doctor's Patient Caseload Chart
    const docPatientCtx = document.getElementById('doctorPatientChart');
    if (docPatientCtx) {
        new Chart(docPatientCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Patients Treated',
                    data: [42, 38, 55, 48],
                    borderColor: '#2dc9b1',
                    backgroundColor: 'rgba(45, 201, 177, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: '#2dc9b1'
                }]
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
                    legend: { display: false }
                }
            }
        });
    }

    console.log("MediCare Doctor Portal initialized.");
});
