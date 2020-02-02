function addInput(id) {

  document.calc.result.value+=id;

}


function clearScreen() {

  document.calc.result.value="";

}


function calculate() {

	var input = evaluate(String(document.calc.result.value));
	
	if(isNaN(input)) {

		document.calc.result.value="Invalid";
	}
	else {

		document.calc.result.value=input;
	}

}
