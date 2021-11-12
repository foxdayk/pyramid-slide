
//printPyramid(5);
 

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
  place = document.getElementById('construction');
  place.parentElement.removeChild(place);

 
document.getElementById('symbollist').addEventListener("change", function(event) {
  if (event.target.value) 
    printPyramid(document.getElementById('vol').value, event.target.value);
});
	
document.getElementById('vol').addEventListener("change", function(event) {
  if (event.target.value) 
    printPyramid(event.target.value, document.getElementById('symbollist').value);
});


function repeat(lchar, num)  {
  result = '';
  for (var i=0; i<num; i++) {result += lchar;}  
  return result;  
}

function printPyramid(height, symb) {
  place = document.getElementById('pyramid');
  
  childs = place.getElementsByTagName('div');
  for(i=childs.length; i>=0; i--) {
	  console.log(childs[i]);
	  if (childs[i])
	  place.removeChild(childs[i]);
	  //console.log(item);
  }
  
  for (var i = 0; i < height; i++) {
    var line = repeat('&nbsp;', height-1-i) + repeat(symb, 2+i);
    
	var newDiv = document.createElement("div");
        newDiv.innerHTML = "<p>"+ line + "</p>";
	place.insertBefore(newDiv, place.lastChild);
		
	console.log(line);    
  }
}