/* SCORE TRACKING WITH COOKIES 
 * use `save_score(mode, score)` to save a score as a cookie.
 * ex: save_score("run", 20) adds 20 points to the player's totl run score
 * use `load_score(mode)` to read the total of the player's score
 * ex: load_score("run") returns 300 if the playr has accumulated 300 xp
 */

// saves and/or updates the scores in the cookies
// mode: 'fly', 'run', 'swim'
// score: the score the user got this game
function save_score(mode, score) {
	old_score = getCookie(mode);
	if (old_score === "")
		setCookie(mode, score, 5000); 
	else 
		setCookie(mode, parseInt(old_score) + score, 5000); 	
}

// returns the score for a given game mode
function load_score(mode) {
	score = getCookie(mode);

	if (score === "") {
		setCookie(mode, 0, 5000); 
		return 0; 	
	}
	
	return score; 
}

// sets a cookie: ex: setCookie("run_xp", 20, 5000) (cookie expiers after 14 years)
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// returns the value of cookie of name cname
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

// deletes one local cookie by name
function delete_cookie(cname) {
	setCookie(cname, 0, "-100"); 
}

// deletes all local cookies (resets xp)
function delete_all_cookies() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
		delete_cookie(c.split('=')[0]); 
    }
}


