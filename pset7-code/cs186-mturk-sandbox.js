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
  reward : 0.02
}


// Create the 5 HITs and ask workers to do them
var hitIDs = new Array(5);
for(var i = 0; i < hitIDs.length; i++){
  // create the hit
  hitIDs[i] = mturk.createHIT(hitParams)
  print("-----------------")
  print("Hit created  : "+ hitIDs[i])
  print("-----------------")
  var hit = mturk.waitForHIT(hitIDs[i])

  // verify the hit is random between 0 and 10
  var input = hit.assignments[0].answer.newText
  print("Input "+input)
  var iinput = parseInt(input)
  if (0 <= iinput && iinput <= 10){
    mturk.approveAssignment(hit.assignments[0])
  }
  else {
    mturk.rejectAssignment(hit.assignments[0])
    i--
  }
}

print("----------FINISHED----------")

