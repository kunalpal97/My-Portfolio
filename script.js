
// this is loader i have adder before that website will reload then it will launch it 
var preloader = document.getElementById('preloader');

function myFunction(){
   preloader.style.display = 'none';
}


//this will take you each part of navigation bar

const nav = document.querySelector(".navbar-item"),
 navList = nav.querySelectorAll('li'),
 totalNavList = navList.length,
 allSection = document.querySelectorAll('.section'),
 totalSection = allSection.length;


for(let i=0; i<totalNavList; i++) {

   const a = navList[i].querySelector("a");
   a.addEventListener("click" , function(){

      for(let j =0; j< totalNavList ; j++) {
          navList[j].querySelector('a').classList.remove("active");
      }

      this.classList.add("active");

      nav.classList.add("close");
   });
}


// ye code scroll pe har ek section pe move kar dega navigation bar ko easyly

window.addEventListener("scroll" , () =>  {

   let fromTop = window.scrollY;

   navListAnchor = nav.querySelectorAll("a");


   navListAnchor.forEach(link => { 

      let section = document.querySelector(link.hash);

      if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){

         link.classList.add("active");
      }

      else{
         
         link.classList.remove("active");
      }




   });

});


//this is while we are using mobile phone all the section should be seen to us

if(window.innerWidth < 1200) {
   burger = document.querySelector(".menu-btn");

   console.log(burger);
   burger.addEventListener("click", function(){

      nav.classList.toggle("close");

      

   })
}



// this is form validation cade when you are writing valid things or this will check by this code 

var submitted = false;

function resetForm() {
  document.getElementById('contact-form').reset();
  document.getElementById('success').innerHTML = ""; // Clear success message
}

function validateForm() {
  if (!validateName() || !validateEmail()) {
    return false;
  } else {
    submitted = true;
    var thankyou = 'Your Message Was Sent Successfully. Thanks!';
    document.getElementById('success').innerHTML = thankyou;
    return true;
  }
}

function validateName() {
  // Add your name validation logic here
  var name = document.getElementById('name').value;
  if (name.length === 0) {
    alert("Name cannot be empty");
    return false;
  }
  return true;
}

function validateEmail() {
  // Add your email validation logic here
  var email = document.getElementById('email').value;
  var regex = /^\S+@\S+\.\S+$/;
  if (!regex.test(email)) {
    alert("Invalid email address");
    return false;
  }
  return true;
}
