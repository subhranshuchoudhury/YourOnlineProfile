//edit only this section **************

let name = "Subhranshu Choudhury";
let age = "18";
let known_language = "[ C, HTML, CSS, SQL, JAVA, BATCH ]";
let qualification = "10+2 equivalent";
let work_experience = "Please edit this on mywork.html";
let address = "At/po: Mahakalapra";
let contact_details = "Mobile: +918249587552 <br>WhatsApp: +918249587552";
let github_profile_link = "https://github.com/subhranshuchoudhury";
let hackerrank_profile_link = "https://hackerrank.com/subhranshusekhar";
let linkedin_profile_link = "https://www.linkedin.com/in/subhranshu-choudhury-6304ab217";
let user_about = "I am a ambitious developer, i like to code means lanuage independent. i know C, HTML, CSS, SQL, JAVA pretty well. I have created so many projects by using these languages.";


//do not edit this section************


document.getElementById("about-user").innerHTML = user_about;
document.getElementById("username").innerHTML = name;
document.getElementById("known_language").innerHTML = known_language;
document.getElementById("github_logo").onclick = function (){
	location.href = github_profile_link;
}
document.getElementById("linkedin_logo").onclick = function (){
	location.href = linkedin_profile_link;
}
document.getElementById("hackerrank_logo").onclick = function (){
	location.href = hackerrank_profile_link;
}

// crossing on css scroll

document.getElementById("we_box").innerHTML = work_experience;


//end




