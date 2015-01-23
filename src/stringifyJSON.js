// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } 

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } 

  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    return '[' + obj.map( function(element) {
      return stringifyJSON(element);
    }) + ']';
  }

  else {
    var string = "{";
    Object.keys(obj).forEach( function(key, index, keys) {
      if (!(typeof obj[key] === 'function' ||  
            typeof obj[key] === 'symbol' || 
            typeof obj[key] === 'undefined')) { 
        string += '"' + key + '":' + stringifyJSON(obj[key]);
        if (index < keys.length-1) {
          string += ',';
        }
      }
    });
    string += "}";
    return string;
  }
};


















