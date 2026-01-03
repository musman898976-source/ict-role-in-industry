// Chart showing ICT Benefits for Industrialists
const ctx = document.getElementById('benefitChart').getContext('2d');
const benefitChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Cost Reduction', 'Efficiency', 'Decision Making'],
        datasets: [{
            label: 'Impact Level (%)',
            data: [85, 90, 75],
            backgroundColor: ['#3498DB','#2ECC71','#E67E22']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'ICT Benefits Impact on Industry'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
