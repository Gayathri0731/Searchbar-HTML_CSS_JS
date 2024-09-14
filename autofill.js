let availablekeywords = [
    "DevOps Engineer",  
    "Data Analyst",  
    "ML Engineer",  
    "Product Manager",  
    "Data Scientist",  
    "Cloud Architect",  
    "Front-end Developer",  
    "Software Engineer",  
    "Backend Developer",  
    "Security Analyst",  
    "Systems Engineer",  
    "Network Engineer",  
    "Mechanical Engineer",  
    "Electrical Engineer",  
    "Civil Engineer",  
    "Industrial Engineer",  
    "Biomedical Engineer",  
    "Chemical Engineer",  
    "Aerospace Engineer",  
    "Environmental Engineer",  
    "Software Developer",  
    "Hardware Engineer",  
    "Automation Engineer",  
    "Quality Assurance Engineer",  
    "Manufacturing Engineer",  
    "Robotics Engineer",  
    "Structural Engineer",  
    "Petroleum Engineer",  
    "Telecommunications Engineer",  
    "Mining Engineer",  
    "Materials Engineer",  
    "Automotive Engineer",  
    "Marine Engineer",  
    "Geotechnical Engineer",  
    "Process Engineer",
]

const resultsBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = function(){
    let result = [];
    let input =inputBox.value;

    if (input.length) {
        result = availablekeywords.filter((keyword) =>{
        return keyword.toLowerCase().includes(input.toLowerCase());
        });

        console.log(result);
    } 
    display(result)

    if(!result.length){
        resultsBox.innerHTML = '';
    }
} 

function display (result){
    const content =result.map((list)=>{
        return "<li onClick = selectInput(this)>" +list+"</li>";
    });

    resultsBox.innerHTML = "<ul>"+ content.join("")+"</ul>"
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML='';
}