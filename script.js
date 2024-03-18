// Skill buttons data
const skills = ["Financial reporting", "Creating detailed financial models to analyze past performance and forecast future trends.", "A solid understanding of accounting", "Quantitative Analysis:", "Decision-Making", "Statistical Analysis", "Ratio Analysis", "Mathematical Proficiency", "Data Interpretation", "Time Series Analysis","Probability Theory","Advance excelfunction & formulas","Data mining","Tally ERP","Excel Skills","SQL","MS Power BI","Trend Forecasting"];

// Create skill buttons dynamically
const skillButtonsContainer = document.getElementById("skillButtons");
skills.forEach(skill => {
    const button = document.createElement("button");
    button.textContent = skill;
    button.style.marginRight = "10px"; // Add right margin for horizontal spacing
    button.style.marginBottom = "10px"; // Add bottom margin for vertical spacing
    button.style.marginTop = "10px"; // Add top margin for vertical spacing
    button.addEventListener("click", function() {
        const skillTextarea = document.getElementById("skilltype");
        skillTextarea.value += skill + "\n";
        updateResumePreview(); // Update the resume preview after adding the skill
    });
    skillButtonsContainer.appendChild(button);
});

// Event listener for job type change
document.getElementById("jobType").addEventListener("change", function() {
    const jobType = this.value;
    let summaryPreview = "";
    switch (jobType) {
        case "Software Developer":
            summaryPreview = "Experienced software developer with expertise in developing scalable web applications using modern technologies such as HTML, CSS, JavaScript, and various frameworks like React and Node.js. Proficient in database management systems like MySQL and MongoDB. Strong problem-solving skills and ability to work effectively in collaborative team environments.";
            break;
        case "Data Analyst":
            summaryPreview = "Detail-oriented data analyst with a strong background in collecting, analyzing, and interpreting complex data sets to drive business decisions. Skilled in statistical analysis and data visualization using tools such as Python, R, and Tableau. Experienced in creating and maintaining data pipelines and implementing machine learning algorithms for predictive modeling.";
            break;
        case "Marketing Specialist":
            summaryPreview = "Results-driven marketing specialist with a proven track record of developing and executing successful marketing campaigns across various channels including social media, email, and content marketing. Experienced in market research, competitive analysis, and customer segmentation. Strong communication and interpersonal skills, with a creative approach to problem-solving.";
            break;
        case "Financial Analyst":
            summaryPreview = "Detail-oriented Financial Analyst with a strong background in reviewing and analyzing an organization's financial status, including cash flow, accounts receivable, accounts payable, debt equity, and operating income. Proficient in developing and maintaining ad hoc departmental reports, creating profitability models, and conducting thorough audits on financial data. Skilled in providing insightful recommendations on corporate risk levels and creditworthiness. Experienced in providing internal consulting on financial products and electronic funds transfers. Possesses a minimum of 2 years of related experience, demonstrating a commitment to accuracy, efficiency, and strategic financial management.";
            break;
        default:
            summaryPreview = "";
            break;
    }
    document.getElementById("summaryPreview").value = summaryPreview;
});

document.addEventListener("DOMContentLoaded", function() {
    // Plus Button for Work History 2
    document.getElementById("addWork2").addEventListener("click", function() {
        const work2Section = document.getElementById("work2Section");
        if (work2Section.style.display === "none") {
            work2Section.style.display = "block";
        } else {
            work2Section.style.display = "none";
        }
    });

    // Repeat the above pattern for Work History 3, 4, 5
});

document.addEventListener("DOMContentLoaded", function() {
    // Plus Button for Work History 2
    document.getElementById("addWork3").addEventListener("click", function() {
        const work2Section = document.getElementById("work3Section");
        if (work2Section.style.display === "none") {
            work2Section.style.display = "block";
        } else {
            work2Section.style.display = "none";
        }
    });

    // Repeat the above pattern for Work History 3, 4, 5
});

document.addEventListener("DOMContentLoaded", function() {
    // Plus Button for Work History 2
    document.getElementById("addWork4").addEventListener("click", function() {
        const work2Section = document.getElementById("work4Section");
        if (work2Section.style.display === "none") {
            work2Section.style.display = "block";
        } else {
            work2Section.style.display = "none";
        }
    });

    // Repeat the above pattern for Work History 3, 4, 5
});


document.addEventListener("DOMContentLoaded", function() {
    // Plus Button for Work History 2
    document.getElementById("addWork5").addEventListener("click", function() {
        const work2Section = document.getElementById("work5Section");
        if (work2Section.style.display === "none") {
            work2Section.style.display = "block";
        } else {
            work2Section.style.display = "none";
        }
    });

    // Repeat the above pattern for Work History 3, 4, 5
});

// Function to hide empty sections
    function hideEmptySections() {
        // Select all headers and bullets
        const headersAndBullets = document.querySelectorAll('.section-header, ul');

        // Loop through each header or bullet
        headersAndBullets.forEach(element => {
            // Check if the element is empty (no text content)
            if (!element.textContent.trim()) {
                // Hide the element if it's empty
                element.style.display = 'none';
            } else {
                // Show the element if it's not empty
                element.style.display = 'block';
            }
        });
    }












// Function to update the resume preview
function updateResumePreview() {
    // Get values from form inputs
    const fullName = document.getElementById("fullName").value;
    const location = document.getElementById("location").value;
    const mobileno = document.getElementById("mobileno").value;
    const email = document.getElementById("email").value;
    const professionalSummary = document.getElementById("summary").value;
    const jobType = document.getElementById("jobType").value;

    // Split skills into two lists
    const skillsTextarea = document.getElementById("skilltype");
    const allSkills = skillsTextarea.value.trim().split('\n');
    const skillsLeft = allSkills.slice(0, 5);
    const skillsRight = allSkills.slice(5);
    const projectsAndInternships = document.getElementById("projects").value.trim().split('\n');

    // Generate resume HTML
    let resumeHTML = `
        <h2>${fullName}</h2>
        <p>Location: ${location}</p>
        <p>Phone No: ${mobileno}</p>
        <p>Email: ${email}</p>
        <h3>Professional Summary</h3>
        <p>${professionalSummary}</p>
        <h3>Skills</h3>
        <div style="display: flex;">
            <div style="flex: 1;">
                <ul>${skillsLeft.map(skill => `<li>${skill}</li>`).join('')}</ul>
            </div>
            <div style="flex: 1;">
                <ul>${skillsRight.map(skill => `<li>${skill}</li>`).join('')}</ul>
            </div>
        </div>
        <h3>Education</h3>
        ${getEducationTableHTML()}
        <h3>Projects and Internships</h3>
        <ul>${projectsAndInternships.map(item => `<li>${item}</li>`).join('')}</ul>
        <h3>Awards and Achievements</h3>
        <ul>${getAwardsHTML()}</ul>
    `;

    // Add all work experiences to the resume preview
    let workExperienceAdded = false; // Flag to track if any work experience has been added
    for (let i = 1; i <= 5; i++) {
        const work = document.getElementById(`work${i}`).value.trim();
        const company = document.getElementById(`company${i}`).value.trim();
        const startDate = document.getElementById(`startdate${i}`).value.trim();
        const summary = document.getElementById(`work${i}summary`).value.trim();

        // Only add section if any of the fields is filled
        if (work !== "" || company !== "" || startDate !== "" || summary !== "") {
            // Add Work Experience header if it hasn't been added yet
            if (!workExperienceAdded) {
                resumeHTML += `<h3>Work Experience</h3>`;
                workExperienceAdded = true; // Set the flag to true to prevent adding the header again
            }
            // Add work experience details
            resumeHTML += `
                <p>${work}</p>
                <p>${company}</p>
                <p>${startDate}</p>
                <ul>${summary.split('\n').map(paragraph => `<li>${paragraph}</li>`).join('')}</ul>
            `;
        }
    }

    // Display generated resume
    document.getElementById("resumePreview").innerHTML = resumeHTML;

    // Call hideEmptySections to hide empty sections
    hideEmptySections();
}

// Function to generate HTML for the education table
function getEducationTableHTML() {
    const tableRows = document.querySelectorAll("#educationTable tbody tr");
    let tableHTML = "<table>";
    tableRows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const rowData = Array.from(cells).map(cell => cell.textContent.trim());
        // Exclude the header row
        if (rowData.length > 0) {
            tableHTML += "<tr>" + rowData.map(data => `<td>${data}</td>`).join("") + "</tr>";
        }
    });
    tableHTML += "</table>";
    return tableHTML;
}

// Function to generate HTML for the awards list
function getAwardsHTML() {
    const awardsTextarea = document.getElementById("awards");
    const awardsList = awardsTextarea.value.trim().split('\n');
    return awardsList.map(award => `<li>${award}</li>`).join('');
}

// Function to hide empty sections
function hideEmptySections() {
    const projectsHeader = document.querySelector("h3:nth-of-type(4)"); // Select the fourth h3 element
    const awardsHeader = document.querySelector("h3:nth-of-type(5)"); // Select the fifth h3 element
    const projectsAndInternships = document.getElementById("projects").value.trim().split('\n');
    projectsHeader.style.display = projectsAndInternships.length > 0 ? "block" : "none";
    awardsHeader.style.display = getAwardsHTML().trim() !== "" ? "block" : "none";
}

// Function to add a new row to the education table
function addRow() {
    const tableBody = document.querySelector("#educationTable tbody");
    const newRow = document.createElement("tr");

    // Add cells (td) to the new row (you can adjust the number of cells as needed)
    for (let i = 0; i < 2; i++) {
        const cell = document.createElement("td");
        cell.textContent = "New Data";
        newRow.appendChild(cell);
    }

    tableBody.appendChild(newRow);
}

// Function to add a new column to the education table
function addColumn() {
    const table = document.getElementById("educationTable");
    const headerRow = table.querySelector("thead tr");

    // Add a new header column
    const newHeaderCell = document.createElement("th");
    newHeaderCell.textContent = "New Field";
    headerRow.appendChild(newHeaderCell);

    // Add cells (td) to each table body row to maintain consistency
    const tableBody = document.querySelectorAll("#educationTable tbody tr");
    tableBody.forEach(row => {
        const newBodyCell = document.createElement("td");
        newBodyCell.textContent = "New Data";
        row.appendChild(newBodyCell);
    });
}

// Add event listeners to form inputs to update the resume preview
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('input', updateResumePreview);
});





// Initialize resume preview
updateResumePreview();

// Function to download resume preview as PDF
function downloadResumePreview() {
    // Get the resume preview HTML
    const resumePreview = document.getElementById("ResumePreview");

    // Define options for html2pdf
    const options = {
        margin: 10,
        filename: 'resume_preview.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Convert HTML to PDF
    html2pdf()
        .from(ResumePreview)                                                                                                                                                                                                                                                                                                                                                        
        .set(options)
        .save();
}

// Add event listener to the download button
document.getElementById("downloadPDF").addEventListener("click", downloadPDF);

