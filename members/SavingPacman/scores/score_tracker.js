// saves and/or updates the scores in the cookies
// mode: 'fly', 'run', 'swim'
function save_score(mode, score) {
	alert("saving");
	cookies = document.cookie.split(';'); 

	// loop thru all cookies, see if run exists, then update
	found = false; 
	for (var i = 0; i < cookies.length; i++) {
		if (cookies[i].startsWith(mode)) {
			old_score = parseInt(cookies[i].split(':')[1]); 
			cookies[i] = mode + ":" + (old_score + score); 
			found = true; 
		}
	}
	if (!found) 
		cookies.push(mode + ":0");

	// re-glue cookie list 
	new_cookies = "";
	for (var i = 0; i < cookies.length; i++) {
		new_cookies += cookies[i] + ";"; 
	}

	document.cookie = new_cookies; 
}
