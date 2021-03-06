module("About Control Structures (topics/about_control_structures.js)");

test("if", function() {
	var isPositive = false;
	if (2 > 0) {
		isPositive = true;
	}
	equals(isPositive, true,  'what is the value of isPositive?');
});

test("for", function() {
	var counter = 10;
	for (var i = 1; i <= 3; i++) {
		counter = counter + i;
	}
	equals(counter, 16, 'what is the value of counter?');
});

test("for in", function() {
	// this syntax will be explained in about objects
	var person = {
		name: "Amory Blaine",
		age: 102
        
	};
	var result = "";
	// for in enumerates the property names of an object
	for (property_name in person) {
  result = result + property_name;
	};
	equals(result, "nameage", 'what is the value of result?');
});

test("ternary operator", function() {
	var fruit = true ? "apple" : "orange";
	equals(fruit, "apple", 'what is the value of fruit?');

	fruit = false ? "apple" : "orange";
	equals(fruit, "orange", 'now what is the value of fruit?');
});

test("switch", function() {
	var result = 0;
	switch (2) {
		case 1:
			result = 1;
			break;
		case 1+1:
			result = 2;
			break;
	}
	equals(result, 2, 'what is the value of result?');
});

test("switch default case", function() {
    var result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
    equals(result, "Merry", 'what is the value of result?');
});

test("null coalescing", function() {
    var result = null || "a value";
    equals(result, "a value", 'what is the value of result?');
});
