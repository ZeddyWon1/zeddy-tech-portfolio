const pText = document.getElementById("dtp");
const pText2 = document.getElementById("dtp2");
const pText3 = document.getElementById("hello");
const pText4 = document.getElementById("dtc");
const pText5 = document.getElementById("hello1");
const frntE = document.getElementById("frntend");
const frntE2 = document.getElementById("frntend2");
const frntE3 = document.getElementById("frntend3");
pText.innerHTML = "I'm A Full Stack Web Developer With Knowledge Of JavaScript, React, Node.js, MongoDB And I Also Build Scalable Web Applications.";
const helloT = document.getElementById("dtc");


helloT.style.height = "fit-content";
helloT.style.padding = "10px"
document.body.style.color = "white";
document.getElementById("react").innerHTML = "React & Node.js "
document.getElementById("react").style.fontSize = "small";
document.getElementById("js").innerHTML = "JavaScript ";
document.getElementById("mcss").innerHTML = "Modern CSS ";
document.getElementById("weba").innerHTML = "Web Animation";

let react = document.getElementById("react");
let jS = document.getElementById("js");
let mCss = document.getElementById("mcss");
let webA = document.getElementById("weba");

frntE.style.fontSize = "12px";
frntE2.style.fontSize = "12px";
frntE3.style.fontSize = "12px";
react.style.marginTop = "15px";
react.style.fontSize = "10px";
jS.style.fontSize = "10px";
mCss.style.fontSize = "10px";
webA.style.fontSize = "10px";

document.getElementById("node").innerHTML = "Node.js ";
document.getElementById("node").style.fontSize = "small";
document.getElementById("GraphQL").innerHTML = "GraphQL ";
document.getElementById("Database").innerHTML = "Database Design";
document.getElementById("restful").innerHTML = "RESTful APIs";


let node = document.getElementById("node");
let graphQL = document.getElementById("GraphQL");
let database = document.getElementById("Database");
let restful = document.getElementById("restful");

node.style.marginTop = "15px";
graphQL.style.fontSize = "small";
database.style.fontSize = "small";
restful.style.fontSize = "small";
node.style.fontSize = "10px";
graphQL.style.fontSize = "10px";
database.style.fontSize = "10px";
restful.style.fontSize = "10px";

document.getElementById("webp").innerHTML = "Web Performance";
document.getElementById("webp").style.fontSize = "small";
document.getElementById("ci").innerHTML = "CI/CD ";
document.getElementById("docker").innerHTML = "Docker";
document.getElementById("aws").innerHTML = "AWS";


let webP = document.getElementById("webp");
let cI = document.getElementById("ci");
let docker = document.getElementById("docker");
let aws = document.getElementById("aws");

webP.style.marginTop = "15px";
cI.style.fontSize = "small";
docker.style.fontSize = "small";
aws.style.fontSize = "small";
webP.style.fontSize = "10px";
cI.style.fontSize = "10px";
docker.style.fontSize = "10px";
aws.style.fontSize = "10px";


const mediaQuery = window.matchMedia('(max-width: 450px)');
function handleScreenChange(e) {
    if (e.matches) {
        pText.style.fontSize = "11px";
        pText2.style.fontSize = "11px";
        pText5.style.fontSize = "21px";
        pText3.style.fontSize = "22px";
    }
    else if (e.matches = "(max-width: 550px)") {
        pText.style.fontSize = "12px";
        pText2.style.fontSize = "12px";
        pText3.style.fontSize = "21px";
        pText5.style.fontSize = "21px";
    }
    else if (e.matches = "(max-width: 780px)") {
        pText.style.fontSize = "12px";
        pText2.style.fontSize = "12px";
        pText3.style.fontSize = "21px";
        pText5.style.fontSize = "21px";
    }
    else if (e.matches = "(max-width: 850px)") {
        pText.style.fontSize = "12px";
        pText2.style.fontSize = "12px";
        pText3.style.fontSize = "25px";
        pText5.style.fontSize = "25px";
    }
    else {
        pText.style.fontSize = "20px";
        pText2.style.fontSize = "20px";
        pText3.style.fontSize = "30px";
        pText5.style.fontSize = "30px";
    }
}

handleScreenChange(mediaQuery);
mediaQuery.addEventListener('change', handleScreenChange);

let getAboutme = document.getElementById("aboutme");
let displayShowForm = document.getElementById("formCnt");

function aboutMe() {
    getAboutme.style.display = "flex";
}
function showForm() {
    displayShowForm.style.display = "block";
}

let barF = document.getElementById("listd");


function remove() {
    document.getElementById("barN").classList.add("slide-out");
}

function dropicon() {
   const box = document.getElementById("barN")
   box.style.display = "block";
   box.classList.toggle("slide-out");
}