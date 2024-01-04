function updateGPA() {
    // Loop through all created courses
    let totalGPAWeighted = 0;
    let totalGPAUnweighted = 0;

    for (let i = 1; i <= courseNumber; i++) {
        // Get the selected grade and type
        const grade = document.getElementById(`grade${i}`).value;
        const type = document.getElementById(`type${i}`).value;

        // Calculate the GPA value based on the grade
        let gpaValue;
        switch (grade) {
            case 'A':
                gpaValue = 4.00;
                break;
            case 'B':
                gpaValue = 3.00;
                break;
            case 'C':
                gpaValue = 2.00;
                break;
            case 'D':
                gpaValue = 1.00;
                break;
            case 'F':
                gpaValue = 0.00;
                break;
            default:
                gpaValue = 0.00;
        }

        // Adjust GPA based on course type
        if (type === 'Accelerated') {
            gpaValue += 0.5;
        } else if (type === 'Honors/AP') {
            gpaValue += 1.0;
        }

        // Update the label with the calculated GPA value for both weighted and unweighted
        document.getElementById(`gradeNum${i}`).innerText = `${gpaValue.toFixed(2)}`;
        totalGPAWeighted += gpaValue;
        totalGPAUnweighted += +grade === 4.00 ? 4.00 : gpaValue;
    }

    // Calculate the overall GPAs
    const overallGPAWeighted = totalGPAWeighted / courseNumber;
    const overallGPAUnweighted = totalGPAUnweighted / courseNumber;

    // Update the "calculated" labels with the overall GPAs
    document.getElementById('calculated').innerText = `${overallGPAWeighted.toFixed(2)}`;
    document.getElementById('calculated-unweighted').innerText = `${overallGPAUnweighted.toFixed(2)}`;
}
