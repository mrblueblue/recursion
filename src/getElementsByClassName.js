

var getElementsByClassName = function(className){

  var allElementsWithClass =[];

  recursiveTraverse(document.body, function(element) {
    if ( element.classList.contains(className) ) {
      allElementsWithClass.push(element);
    }
  });

  return allElementsWithClass;
};

var recursiveTraverse = function(node, iterator) {

  iterator(node);
  node = node.firstElementChild;

  while (node) {
    recursiveTraverse(node, iterator);
    node = node.nextElementSibling;
  }
  
};
