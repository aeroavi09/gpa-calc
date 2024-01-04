courseNumber = 0;

function createDiv() {
    document.getElementById('calculated').innerText = `4.00`;
    courseNumber += 1;
    // Create a new div element
    var newDiv = document.createElement("div");

    // Set some attributes for the div (you can customize these)
    newDiv.className = "addedCourses";
    newDiv.innerHTML = `
    <p>Course ${courseNumber}</p>
    <label for="grade${courseNumber}">Select Grade:</label>
    <select id="grade${courseNumber}" onchange="updateGPA()">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
    </select>
    
    <label for="type${courseNumber}">Select Type:</label>
    <select id="type${courseNumber}" onchange="updateGPA()">
        <option value="Normal">Normal</option>
        <option value="Accelerated">Accelerated</option>
        <option value="Honors/AP">Honors/AP</option>
    </select>
    <hr>
    <center>
    <label id="gradeNum${courseNumber}">4.00</label>
    </center>`;
    
    // Append the new div to the body
    document.getElementById('holder').appendChild(newDiv);
}

function updateGPA() {
    // Loop through all created courses
    let totalGPA = 0;
    let totalUnweightedGPA = 0; // Add a variable for unweighted GPA

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

        // Update the label with the calculated GPA value
        document.getElementById(`gradeNum${i}`).innerText = `${gpaValue.toFixed(2)}`;
        totalGPA += gpaValue;

        // For unweighted GPA, simply add the GPA value
        totalUnweightedGPA += gpaValue;
    }

    // Calculate the overall GPA
    const overallGPA = totalGPA / courseNumber;
    const overallUnweightedGPA = totalUnweightedGPA / courseNumber;

    // Update the "calculated" label with the overall GPA
    document.getElementById('calculated').innerText = `${overallGPA.toFixed(2)}`;
    document.getElementById('calculated-unweighted').innerText = `${overallUnweightedGPA.toFixed(2)}`;
}

