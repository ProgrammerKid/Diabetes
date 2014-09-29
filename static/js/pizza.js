var pizza = {
    add: function() {
	var currAmt = localStorage.getItem("pEaten");
	if(currAmt != null) {
	    var newAmt = eval(currAmt + "+1");
	    localStorage.setItem("pEaten", newAmt);
	}
	else {
	    localStorage.setItem("pEaten", "0");
	    pizza.add();
	}

	if(currAmt == "100") {
	    alert("You successfully have diabetes!!!");
	}
    }
};
