// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  // The 'easier than the hard way' way  //
  // return eval(' new Object(' + json + ')')

  if (typeof eval(json) === 'number' ||
  	  typeof eval(json) === 'boolean' ||
      typeof eval(json) ==='string' ||
      typeof eval(json) === 'null') {

  	return eval(json)
  }

  if ( Array.isArray(eval(json)) ) {
    return eval(json)
  }

  else {
    var jsonOject = {};

    jsonObject[parseJSON(key)]=parseJSON(value);


    return jsonOject;
  }



  
};

console.log(typeof parseJSON('[true, 1, "hello"]'));