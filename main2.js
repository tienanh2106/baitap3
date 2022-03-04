function callAddInformation (){

    var name1 = document.getElementById("name").value;
    var phone1 = document.getElementById("phone").value;
    var network1 = document.getElementById("network").value;
    console.log( network1); 
    if (name1=== "" || phone1 === ""||network1 === "") {
        alert("Please enter values");
        return;
    }
        document.getElementById("container2").style.display = "block";
        document.getElementById("exportName").innerHTML = name1;
        document.getElementById("exportPhone").innerHTML = phone1;
        
        function mFunction(sel) {
            var sel = document.getElementById("network"); 
            var text = sel.options[sel.selectedIndex].text;
            return text;
        }
        document.getElementById("exportNetwork").innerHTML=mFunction();
    }   
    document.getElementById("access").onclick = function() {
        callAddInformation();
        
      };
   
    