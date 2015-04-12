// Problem 1.  Warming up

// TO-DO:  Find the functions to print your balance and the # of open hits.
print("Hello MTurk!")
print("Your balance is: " + mturk.getAccountBalance()  )
print("No. of hits: "+ mturk.getHITs().length )

// Explore the HIT object. 
// Get the first HIT and then iterate over its properties.
if(mturk.getHITs().length > 0) {
	var hitObj = mturk.getHIT(0, true) 
	for(attr in hitObj) 
		print("Attr ="+attr+ " val="+hitObj[attr])
}

