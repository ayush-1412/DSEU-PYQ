const subjects = {
    "bca": [
        "Mathematics - 1", "Computer Organization and Architecture", "Programming in C", "Information Technology",
        "Software Engineering", "Discrete Mathematics", "Operating Systems", "Linux", "Data and File Structure using C",
        "OOP using C++", "EVS - 1", "Web Technology", "Computer Graphics", "Python Programming", "DBMS",
        "Computer Networks", "Java Programming", "Design and Analysis Algorithm", "Introduction to Cloud Technologies",
        "Cyber Security and Cyber Law", "Data Science using Python", "SPM", "Machine Learning", "Mobile Application Development",
        "IOT", "AI and NN"
    ],
    "bsc_mlt": [
        // Add subjects for B.Sc. (Medical Laboratory Technology)
        "Medical Biochemistry", "Medical Microbiology", "Pathology", "Pharmacology", "Laboratory Management"
    ],
    "bsc_da": [
        // Add subjects for B.Sc. (Data Analytics)
        "Data Visualization", "Data Mining", "Statistical Analysis", "Machine Learning", "Big Data Technologies"
    ]
};

const questionPapers = {
    "bca": {
        "Data Science using Python": [
            { year: "2023-2024", file: "data_science_using_python_2023.pdf" },
            { year: "2024-2025", file: "data_science_using_python_2024.pdf" }
        ]
        // Add other subjects and years here
    },
    "bsc_mlt": {
        "Medical Biochemistry": [
            { year: "2023", file: "medical_biochemistry_2023.pdf" }
        ]
        // Add other subjects and years here
    },
    "bsc_da": {
        "Data Visualization": [
            { year: "2023", file: "data_visualization_2023.pdf" }
        ]
        // Add other subjects and years here
    }
};

function populateSubjects() {
    const course = document.getElementById('course').value;
    const subjectDropdown = document.getElementById('subject');
    
    subjectDropdown.innerHTML = '<option value="" disabled selected>Select Subject</option>';
    
    if (subjects[course]) {
        subjects[course].forEach(subject => {
            let option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            subjectDropdown.appendChild(option);
        });
    }
}

function handleSubmit() {
    const course = document.getElementById('course').value;
    const subject = document.getElementById('subject').value;

    if (course && subject) {
        showPapers(course, subject);
    } else {
        alert('Please select both course and subject.');
    }
}

function showPapers(course, subject) {
    const papersSection = document.getElementById('papersSection');
    papersSection.innerHTML = ''; // Clear previous results

    if (questionPapers[course] && questionPapers[course][subject]) {
        questionPapers[course][subject].forEach(paper => {
            let paperItem = document.createElement('div');
            paperItem.className = 'paper-item';
            paperItem.innerHTML = `${subject} ${paper.year} <a href="${paper.file}" download>Download</a>`;
            papersSection.appendChild(paperItem);
        });
    } else {
        papersSection.innerHTML = 'No question papers available for this subject.';
    }
}
