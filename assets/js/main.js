jQuery('document').ready(function($){
   $("#portfolio-menu").click(function () {
      $("#new-menu").toggleClass("hidden");
   });

   // ********************** STARS **********************//
   function createStar() {
      const starShower = $("#starShower");
      const star = $('<div class="star"></div>');

      // Random size for stars
      const size = Math.random() * 3 + 1;
      star.css({
         width: size,
         height: size,
         top: `${Math.random() * starShower.height()}px`,
         left: `${Math.random() * starShower.width()}px`,
      });

      starShower.append(star);

      // Animate the star: you can change the speed and direction
      star.animate(
         {
            top: starShower.height() + 20,
         },
         {
            duration: Math.random() * 3000 + 2000, // Random speed
            easing: "linear",
            complete: function () {
               $(this).remove(); // Remove star after animation completes
            },
         }
      );
   }

   // Create stars at intervals
   setInterval(createStar, 90); // Adjust the interval for more/less frequent stars

   // ********************** STARS END**********************//

   // ********************** DESIGNATION **********************//
   var i = 0;
   var txt = "A Full Stack Web Developer";
   var speed = 200;
   var pauseTime = 2000;

   function typeWriter() {
      if (i < txt.length) {
         document.getElementById("designation").innerHTML += txt.charAt(i);
         i++;
         setTimeout(typeWriter, speed);
      } else {
         setTimeout(resetAndRestart, pauseTime);
      }
   }

   function resetAndRestart() {
      i = 0;
      document.getElementById("designation").innerHTML = ""; // Clear the content
      setTimeout(typeWriter, speed); // Restart the typing animation
   }

   typeWriter();

   // ********************** DESIGNATION **********************//

   // ********************** SLIDER **********************//

   var glide07 = new Glide(".glide-08", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 0,
      classes: {
         activeNav: "[&>*]:bg-white",
      },
   });

   glide07.mount();

   // ********************** SLIDER END **********************//

})