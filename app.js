const btn = document.getElementById("submit-btn");
const output = document.getElementById("bmi-output");
const message = document.getElementById("message");

const calculateBMI = () => {
    const height = document.getElementById("heightInput").value;
    const weight = document.getElementById("weightInput").value;

    if (!height || !weight) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter Values",
        });
        return;
    }
    const meter = calculateHeightInMeters(height);

    const result = weight / (meter * meter);

    output.innerHTML = `Your BMI is <span class="fw-semibold">${result.toFixed(2)}</span>`;
    setMessage(result);
};

const calculateHeightInMeters = (height) => {
    if (String(height).includes(".")) {
        const [feet, inches] = String(height).split(".");
        return +feet * 0.3048 + +inches * 0.0254;
    } else {
        return height * 0.3048;
    }
};

const setMessage = (result) => {
    if (result < 18.5) {
        message.innerHTML = `You are underweight 🦴`;
    } else if (result >= 18.5 && result <= 24.9) {
        message.innerHTML = `You are Healthy 💪 🏋️`;
    } else if (result >= 25 && result <= 30) {
        message.innerHTML = `You are overweight 🍔`;
    } else {
        message.innerHTML = `You are Obese 🧀`;
    }
};
