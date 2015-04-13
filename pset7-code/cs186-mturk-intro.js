// Problem 1.  Warming up

// TO-DO:  Find the functions to print your balance and the # of open hits.
print("Hello MTurk!")
print("Your balance is: " + mturk.getAccountBalance()  )

var hits = mturk.getHITs()
print("No. of hits: " +  hits.length )

// Explore the HIT object. 
// Get the first HIT and then iterate over its properties.
if(hits.length > 0) {
	var hitObj = hits[0] 
	for(attr in hitObj) 
		print("Attr ="+attr+ " val="+hitObj[attr])
}

