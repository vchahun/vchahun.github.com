/* Cesar-style cryptography :) */

function shift(s, n) {
	c = "";
	for(var i = 0; i < s.length; i++) {
		c += String.fromCharCode(s.charCodeAt(i)+n);
	}
	return c;
}

/* Decoding */

window.onload = function() {
	s = document.getElementById('email');
	e = shift(s.getAttribute('data-encoded'), -100);
	s.innerHTML = "<a href='mailto:"+e+"'>"+e+"</a>";
}

