// Data untuk grafik kunjungan website

const dataKunjungan = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [{
        label: 'Kunjungan Website',
        data: [200, 150, 300, 250, 400, 350, 500, 450, 600, 550, 700, 650],
        backgroundColor: 'rgba(229,179,12,255)',
        borderColor: 'rgba(240, 211, 114, 1)',
        borderWidth: 1
    }]
};

// Data untuk grafik jumlah pengguna
const dataPengguna = {
    labels: ['Admin', 'Student'],
    datasets: [{
        label: 'Jumlah Pengguna',
        data: [500, 300],
        backgroundColor: [
            'rgba(229,179,12,255)',
            '#6c6c6c'
        ],
        borderColor: [
            'rgba(229,179,12,255)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    }]
};

// Konfigurasi grafik kunjungan
const configKunjungan = {
    type: 'bar',
    data: dataKunjungan,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Konfigurasi grafik jumlah pengguna
const configPengguna = {
    type: 'doughnut',
    data: dataPengguna,
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        cutout: '80%',
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    return percentage;
                },
                color: '#000',
                font: {
                    weight: 'bold'
                }
            }
        }
    }
};

// Menggambar grafik kunjungan
var grafikKunjungan = new Chart(
    document.getElementById('grafikKunjungan'),
    configKunjungan
);

// Menggambar grafik jumlah pengguna
var grafikPengguna = new Chart(
    document.getElementById('grafikPengguna'),
    configPengguna
);

// Menambahkan keterangan untuk grafik jumlah pengguna
document.getElementById('keteranganGrafikPengguna').innerHTML = '<p>Mentor: 50 Orang</p><p>Student: 450 Orang</p>';
