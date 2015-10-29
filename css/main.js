var words = ["ARIANNE", "DEVELOPER", "FRONT-END", "LABORATORIA", "FRIENDS"];

window.addEventListener("load", function() {
		var randoms = window.document.getElementsByClassName("randoms");
		for (i = 0; i < randoms.length; i++)
				changeWord(randoms[i]);
}, false);

function changeWord(a) {
		a.style.opacity = '0.1';
		a.innerHTML = words[getRandomInt(0, words.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
		}, 425);
		setTimeout(function() {
				changeWord(a);
		}, getRandomInt(500, 800));
}


function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Code stolen from css-tricks for smooth scrolling:
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});