document.addEventListener("DOMContentLoaded", function() {
    // Set default chart font configuration
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Inter', sans-serif";

    // 1. Revenue vs Expenses Trend Line Chart
    const lineCtx = document.getElementById('trendLineChart');
    if (lineCtx) {
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'Revenue',
                        data: [85000, 92000, 105000, 115000, 125000, 138000, 150000],
                        borderColor: '#2dd4bf',
                        backgroundColor: 'rgba(45, 212, 191, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointBackgroundColor: '#2dd4bf',
                        pointBorderColor: 'rgba(255,255,255,0.5)',
                        pointRadius: 4,
                        pointHoverRadius: 6
                    },
                    {
                        label: 'Expenses',
                        data: [65000, 68000, 72000, 78500, 82000, 88000, 92000],
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.05)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 2,
                        pointBackgroundColor: '#f59e0b',
                        pointBorderColor: 'rgba(255,255,255,0.5)',
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255,255,255,0.05)',
                            drawBorder: false
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + (value/1000) + 'k';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'end',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: { size: 12, weight: '500' }
                        }
                    },
                    tooltip: {
                backgroundColor: '#0d1e3a',
                titleColor: '#fff',
                bodyColor: '#94a3b8',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                callbacks: {
                    label: function(context) {
                        return ' ' + context.dataset.label + ': $' + context.parsed.y.toLocaleString();
                    }
                }
                    }
                }
            }
        });
    }

    // 2. Patient Registration & Visit Trends
    const patientCtx = document.getElementById('patientTrendChart');
    if (patientCtx) {
        new Chart(patientCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'New Registrations',
                        data: [45, 52, 48, 61, 55, 68],
                        borderColor: '#2dd4bf',
                        backgroundColor: 'rgba(45, 212, 191, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointRadius: 4
                    },
                    {
                        label: 'Total Visits',
                        data: [320, 350, 310, 420, 390, 450],
                        borderColor: '#0ea5e9',
                        backgroundColor: 'rgba(14, 165, 233, 0.05)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 2,
                        pointRadius: 0,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { intersect: false, mode: 'index' },
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
                    legend: {
                        position: 'top',
                        align: 'end',
                        labels: { usePointStyle: true, color: '#94a3b8' }
                    }
                }
            }
        });
    }

    // 3. Staff Hiring Trend Chart
    const staffHiringCtx = document.getElementById('staffHiringChart');
    if (staffHiringCtx) {
        new Chart(staffHiringCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Gross Hiring',
                        data: [42, 45, 48, 52, 58, 64],
                        borderColor: '#0ea5e9',
                        backgroundColor: 'rgba(14, 165, 233, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                        pointRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
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

    // 4. Department Distribution (Staff)
    const deptCtx = document.getElementById('departmentDistributionChart');
    if (deptCtx) {
        new Chart(deptCtx, {
            type: 'doughnut',
            data: {
                labels: ['Cardiology', 'Pediatrics', 'Laboratory', 'Others'],
                datasets: [{
                    data: [18, 12, 10, 24],
                    backgroundColor: ['#2dd4bf', '#0ea5e9', '#f59e0b', '#6366f1'],
                    borderWidth: 0,
                    hoverOffset: 15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { usePointStyle: true, padding: 20, color: '#94a3b8', font: { size: 11 } }
                    }
                }
            }
        });
    }

    // 5. Finance: Income vs Expenses Area Chart
    const incomeExpCtx = document.getElementById('incomeExpensesChart');
    if (incomeExpCtx) {
        new Chart(incomeExpCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                    {
                        label: 'Total Income',
                        data: [25000, 32000, 28000, 45000],
                        borderColor: '#2dd4bf',
                        backgroundColor: 'rgba(45, 212, 191, 0.2)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3
                    },
                    {
                        label: 'Total Expenses',
                        data: [15000, 18000, 16000, 22000],
                        borderColor: '#f43f5e',
                        backgroundColor: 'rgba(244, 63, 94, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 2,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { intersect: false, mode: 'index' },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                        ticks: { color: '#94a3b8', callback: (val) => '$' + val.toLocaleString() }
                    },
                    x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                },
                plugins: {
                    legend: { position: 'top', align: 'end', labels: { usePointStyle: true, color: '#94a3b8' } }
                }
            }
        });
    }

    // 6. Finance: Service Revenue Breakdown
    const serviceRevCtx = document.getElementById('serviceRevenueChart');
    if (serviceRevCtx) {
        new Chart(serviceRevCtx, {
            type: 'bar',
            data: {
                labels: ['Cardiology', 'Pediatrics', 'Surgery', 'General', 'Lab'],
                datasets: [{
                    label: 'Revenue by Service',
                    data: [12500, 8400, 21000, 6500, 15800],
                    backgroundColor: [
                        '#2dd4bf', // Cardiology - Cyan
                        '#0ea5e9', // Pediatrics - Blue
                        '#f59e0b', // Surgery - Amber
                        '#6366f1', // General - Indigo
                        '#10b981'  // Lab - Emerald
                    ],
                    borderRadius: 10,
                    hoverBackgroundColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                        ticks: { color: '#94a3b8', callback: (val) => '$' + val.toLocaleString() }
                    },
                    x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // 7. Dashboard: Expense Breakdown Pie Chart
    const expensePieCtx = document.getElementById('expensePieChart');
    if (expensePieCtx) {
        new Chart(expensePieCtx, {
            type: 'doughnut',
            data: {
                labels: ['Payroll', 'Equipment', 'Utilities', 'Supplies', 'Others'],
                datasets: [{
                    data: [45, 25, 12, 10, 8],
                    backgroundColor: [
                        '#6366f1', // Indigo
                        '#f59e0b', // Amber
                        '#0ea5e9', // Blue
                        '#10b981', // Emerald
                        '#94a3b8'  // Secondary
                    ],
                    hoverOffset: 20,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            color: '#94a3b8',
                            font: { size: 12, weight: '500' }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#0d1e3a',
                        padding: 12,
                        cornerRadius: 10,
                        titleColor: '#fff',
                        bodyColor: '#94a3b8',
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1
                    }
                }
            }
        });
    }

    // 8. Dashboard: Net Profit Trend Line Chart
    const profitTrendCtx = document.getElementById('profitLineChart');
    if (profitTrendCtx) {
        new Chart(profitTrendCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Net Profit',
                    data: [18500, 22400, 21000, 32400, 28000, 35000],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: 'rgba(255,255,255,0.5)',
                    pointRadius: 4,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                        ticks: { 
                            color: '#94a3b8',
                            callback: (val) => '$' + (val/1000) + 'k'
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#94a3b8' }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#0d1e3a',
                        padding: 12,
                        cornerRadius: 10,
                        titleColor: '#fff',
                        bodyColor: '#10b981',
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1
                    }
                }
            }
        });
    }

    // 9. Finance: Specialty Income Breakdown (Bar Chart)
    const specIncCtx = document.getElementById('specialtyIncomeChart');
    if (specIncCtx) {
        new Chart(specIncCtx, {
            type: 'bar',
            data: {
                labels: ['Cardiology', 'Pediatrics', 'Radiology', 'Surgery', 'Laboratory'],
                datasets: [{
                    label: 'Income per Specialty',
                    data: [42500, 28400, 31200, 54000, 18500],
                    backgroundColor: [
                        'rgba(45, 212, 191, 0.7)', // Cyan
                        'rgba(99, 102, 241, 0.7)', // Indigo
                        'rgba(14, 165, 233, 0.7)', // Blue
                        'rgba(16, 185, 129, 0.7)', // Emerald
                        'rgba(245, 158, 11, 0.7)'  // Amber
                    ],
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    borderRadius: 10,
                    hoverBackgroundColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                        ticks: { color: '#94a3b8', callback: (val) => '$' + (val/1000) + 'k' }
                    },
                    x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    // 10. Finance: Monthly Expense History (Line Chart)
    const monthExpCtx = document.getElementById('monthlyExpenseChart');
    if (monthExpCtx) {
        new Chart(monthExpCtx, {
            type: 'line',
            data: {
                labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
                datasets: [{
                    label: 'Monthly Expenses',
                    data: [42000, 45000, 38500, 52000, 44000, 48240],
                    borderColor: '#f43f5e', // Rose/Red
                    backgroundColor: 'rgba(244, 63, 94, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#f43f5e',
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                        ticks: { color: '#94a3b8', callback: (val) => '$' + (val/1000) + 'k' }
                    },
                    x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
});
