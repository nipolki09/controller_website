
        const loadImage = ["ps4-controller-png-42098.png","ps4-controller-png-42099.png","ps4-controller-png-42109.png"]

        const changeImage = document.querySelector(".second-section .interactive-image .colours");

        console.log(changeImage);

        const buttons = document.querySelectorAll(".second-section .colours-button button");

        console.log(buttons);
        

        buttons[0].addEventListener('mouseover' , () => {

             let settingAttribute = changeImage.setAttribute("src",loadImage[0]);

             changeImage.style.transform = "translateY(" + (-50) + "px)";

             changeImage.style.transition = "1.2s";

              console.log(settingAttribute);
        });

        buttons[1].addEventListener('mouseover' , eventSecond)

          function eventSecond() {

             let settingAttribute = changeImage.setAttribute("src",loadImage[1]);

             changeImage.style.transform = "translateY(" + (-50) + "px)";

             changeImage.style.transition = "1.2s";

              console.log(settingAttribute);
        };
           

        buttons[2].addEventListener('mouseover' , () => {

             let settingAttribute = changeImage.setAttribute("src",loadImage[2]);

             changeImage.style.transform = "translateY(" + (-50) + "px)";

             changeImage.style.transition = "1.2s";
             
              console.log(settingAttribute);
        });


      function loginForm(){
            let display = document.getElementById('login-container').style.display;
            if (display===""){
                  document.getElementById('login-btn').innerHTML = "Close Form";
                  document.getElementById('login-container').style.display="block";

            }
            else{
                  document.getElementById('login-btn').innerHTML = "Log In";
                  document.getElementById('login-container').style.display="";
            }
      }
//loader js

window.addEventListener('load', function() {
      const loaderContainer = document.querySelector('.loader-container');
      setTimeout(function() {
        loaderContainer.style.display = 'none';
      }, 1000); 
    });
    