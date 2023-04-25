// window.onload = initAll;
//       var submitBtn;
//       function initAll(){
//           submitBtn = document.getElementById("btn");
//           submitBtn.onclick = submitFunc;
        
//       }

//       function submitFunc(){
//           var xhttp = new XMLHttpRequest();
//           var AppIncome = document.getElementById("AppIncome").value;
//           var CoAppIncome = document.getElementById("CoAppIncome").value;
//         //   var gender = document.getElementById("gender").value;
//         //   var married = document.getElementById("married").value;
//         //   var property = document.getElementById("property").value;
//         //   var credit = document.getElementById("credit").value;
//         //   var education = document.getElementById("education").value;
//         //   var self = document.getElementById("self").value;
//         //   var dependent = document.getElementById("dependent").value;
//         //   var amount = document.getElementById("amount").value;
//         //   var amountTerm = document.getElementById("amountTerm").value;
//           var url = '/predict?AppIncome='+AppIncome+'&CoAppIncome='+CoAppIncome+'&gender='+gender+'&married='+married+'&property='+property+'&credit='+credit+'&education='+education+'&self='+self+'&dependent='+dependent+'&amount='+amount+'&amountTerm='+amountTerm;
//           xhttp.onreadystatechange = function() {
//               if (this.readyState == 4 && this.status == 200) {
//             //   document.getElementById("text_to_change").innerHTML =
//               // this.responseText;
//               var output = this.responseText;
//               if( output == 1)
//               {
//                 document.getElementById("output").innerHTML = "Congratulations!! You qualify for the loan";
//                 document.getElementById("output").style.color = "green";
//                 document.getElementById("AppIncome").value = null;
//                 document.getElementById("CoAppIncome").value = null;
//                 document.getElementById("gender").selectedIndex  = "0";
//                 document.getElementById("married").selectedIndex  = "0";
//                 document.getElementById("property").selectedIndex  = "0";
//                 document.getElementById("credit").selectedIndex  = "0";
//                 document.getElementById("education").selectedIndex  = "0";
//                 document.getElementById("self").selectedIndex  = "0";
//                 document.getElementById("dependent").value = null;
//                 document.getElementById("amount").value = null;
//                 document.getElementById("amountTerm").value = null;
//               }
//               else{
//                 document.getElementById("output").innerHTML = "You are not qualify for loan";
//                 document.getElementById("output").style.color = "red";
//                 document.getElementById("AppIncome").value = null;
//                 document.getElementById("married").selectedIndex  = "0";
//                 document.getElementById("AppIncome").value = null;
//                 document.getElementById("CoAppIncome").value = null;
//                 document.getElementById("gender").selectedIndex  = "0";
//                 document.getElementById("married").selectedIndex  = "0";
//                 document.getElementById("property").selectedIndex  = "0";
//                 document.getElementById("credit").selectedIndex  = "0";
//                 document.getElementById("education").selectedIndex  = "0";
//                 document.getElementById("self").selectedIndex  = "0";
//                 document.getElementById("dependent").value = null;
//                 document.getElementById("amount").value = null;
//                 document.getElementById("amountTerm").value = null;
//               }
//               }
//           };
//           xhttp.open("GET", url, true);
//           xhttp.send();
//       }

//       function makeEmpty()
//       {
//         document.getElementById("AppIncome").value = null;
//       }
// // $(function(){
// // 	$('button').click(function(){
// //         alert("lk")
// // 		var user = $('#AppIncome').val();
// // 		var pass = $('#CoAppIncome').val();
// // 		$.ajax({
// // 			url: '/signUpUser',
// // 			data: $('form').serialize(),
// // 			type: 'POST',
// // 			success: function(response){
// // 				console.log(response);
// // 			},
// // 			error: function(error){
// // 				console.log(error);
// // 			}
// // 		});
// // 	});
// // });