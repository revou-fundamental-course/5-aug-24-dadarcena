function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const gender = document.getElementById("gender").value;

    // Validasi: Pastikan semua input diisi
    if (!height || !weight || !gender) {
        alert("Data masih kosong !");
        return;
    }

    // Lanjutkan dengan perhitungan BMI jika validasi lolos
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    let status = "";
    let message = "";

    if (bmi < 18.5) {
        status = "Underweight";
        message = "Anda kekurangan berat badan. Anda berisiko mengalami kekurangan gizi, osteoporosis, dan masalah kesehatan lainnya.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Healthy weight";
        message = "Anda memiliki berat badan yang sehat. Jaga pola makan dan rutin berolahraga untuk menjaga kesehatan.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight";
        message = "Anda kelebihan berat badan. Anda berisiko mengalami kondisi seperti diabetes tipe 2, hipertensi, dan penyakit jantung.";
    } else {
        status = "Obesity";
        message = "Anda mengalami obesitas. Konsultasikan dengan dokter untuk rencana penurunan berat badan yang aman.";
    }

    document.getElementById("bmiValue").textContent = bmi;
    document.getElementById("bmiStatus").textContent = status;
    document.getElementById("bmiMessage").textContent = message;

    document.querySelector(".bmi-calculator").style.display = "none";
    document.getElementById("bmiResult").style.display = "block";
}
