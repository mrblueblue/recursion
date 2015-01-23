var _ = require('underscore');

var obj = {
	'five' : 6, 
	hello: -3, 
	1 : [ 7, 8, -2, 1 ],
	 a : { f : 10, g : -13 } 
	};

var test = [1,2,3,[1,4]];



var stringifyJSON = function(obj){
  
  if (typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString()
  } 

  else if (typeof obj === 'string') {
    return '"' + obj + '"'
  }

  else if ( Array.isArray(obj) ) {
    return '[' + obj.map( function(element) {
      return stringifyJSON(element)
    }) + ']'
  }

	else {
    var stringObject = '{'
    Object.keys(obj).forEach( function(key, index, keys) {
      stringObject += '"' + key + '"' + ':' + stringifyJSON(obj[key]);
      if (index < keys.length-1) {
        stringObject += ',';
      }
    })
  }
stringObject += '}'
return stringObject;

}

console.log(stringifyJSON({'kello':2, '3':[true, 4]}));
console.log(JSON.parse(stringifyJSON({'kello':2, '3':[true, 4]})));
