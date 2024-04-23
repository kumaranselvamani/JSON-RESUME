function myResume() {
const resume = {
    name: "kumaran",
    label: "Developer",
    email: "kumaranmech5@gmail.com",
    phone: "+91 7708089394",
    address: {
      city: "chennai",
      country: "india"
    },
    education: {
    institution: "ANNA University",
    dipartment: "Mechanical Engineering",
    studyType: "Bachelor of Engineering"
    },
    certificates: {
    name: "webdevelopment bootcamp-2024",
    date: "2024-Mar",
    issuer: "Udemy"
    },
    skills: ["javascript", "reactjs", "html", "css", "mongoDB", "Nodejs"],
    languages: ["english", "tamil"],
    projects: {
    name: "TO DO LIST APP",
    technologies:["javascript","css","html"],
    url: "https://project.com/https://kumaranselvamani.github.io/todolist/"
    },
    hobbies: ["reading", "gaming"],
  

}
//** for in iteration ************** */

for (let key in resume){
    console.log(key, resume[key]);
}

//** for of iteration ****************/

for( let key of Object.keys(resume)){
    console.log(key, resume[key]);
}


//*** for Each method   ******** */ 
    Object.keys(resume).forEach(key => {
        const value = resume[key];
        console.log(`${key}: ${value}`);
    });
 
}
myResume();