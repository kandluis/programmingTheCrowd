// Problem 2.  Random numbers

function makeSecure(url) {
return url.substring(0, 4) + "s" + url.substring(4);
}

// TO-DO:  Expand on our HTML code for the task.
var page = createWebpageFromTemplate(
<div>
<p>Pick a random number between 1 and 10.</p>
<textarea style="width:350px;height:30px" name="newText">..</textarea>
 <input type="submit" value="Submit"></input>
</div>);




// TO-DO define the HIT parameters.
var hitParams = {
        title : "Pick a Number",
        desc : "Pick a random number between 1 and 10.",
	url : makeSecure(page),
        height : 800,
        reward : 0.02,
    }


// Create the HIT
var hitID = mturk.createHIT(hitParams)
print("Hit created  : "+ hit)

//Report the results on the writeup

var hit = mturk.waitForHIT(hitID)

