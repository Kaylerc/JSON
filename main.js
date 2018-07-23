// function loadAttraction() {
//  var newSpot = new XMLHttpRequest();
//  newSpot.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//      var whereTo = JSON.parse(this.responseText);
//
//
//      }
//
//
//
//      console.log(whereTo);
//    }
// newSpot.open("GET", "https://raw.githubusercontent.com/Kaylerc/jason/master/index.json", true);
//  };
 // newSpot.open("GET", "https://raw.githubusercontent.com/Kaylerc/jason/master/index.json", true);

 function loadDoc() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       var nycData = JSON.parse(this.responseText);
       var ul = getElementById("queensp");
       var qp = NYC.boroughs.queens.parks[0];
       console.log(qp);

       var li = createElement("li");
       var t = vreateTextNOde('')



      // document.getElementById("demo").innerHTML = this.responseText;
     }

   };
   xhttp.open("GET", "https://raw.githubusercontent.com/Kaylerc/jason/master/index.json", true);
   xhttp.send();
 }
