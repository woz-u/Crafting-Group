import React from 'react';
import ReactDOM from 'react-dom';

function increaseCount(a, b) {
	var input = b.previousElementSibling;
	var value = parseInt(input.value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	input.value = value;
  }
  
  function decreaseCount(a, b) {
	var input = b.nextElementSibling;
	var value = parseInt(input.value, 10);
	if (value > 1) {
	  value = isNaN(value) ? 0 : value;
	  value--;
	  input.value = value;
	}
  }

//   function AddMore(){
// 	var repetFrom = $("#button").find(".button").first().clone();
//             repetFrom.appendTo($("#button"));
//         }
  