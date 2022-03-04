function callAddInformation (){

    var name1 = document.getElementById("name").value;
    var phone1 = document.getElementById("phone").value;
    var network1 = document.getElementById("network").value;
    console.log(network1); 
    if (name1=== "" || phone1 === ""||network1 === "") {
        alert("Please enter values");
        return;
    }    
        document.getElementById("container2").style.display = "block";
        document.getElementById("exportName").innerHTML = name1;
        document.getElementById("exportPhone").innerHTML = phone1;
        switch (network1) {
            case '1':
                var result = 'Vietel';
                document.getElementById("exportNetwork").innerHTML =result;
                break;
            case '2':
                var result = 'VinaPhone';
                document.getElementById("exportNetwork").innerHTML =result;
                break;
            case '3':
                var result = 'MobiPhone';
                document.getElementById("exportNetwork").innerHTML =result;
                break;
            case '4':
                var result = 'Nước ngoài';
                document.getElementById("exportNetwork").innerHTML =result;
                break;       
            default:
                break;
        }
    }   
    document.getElementById("access").onclick = function() {
        callAddInformation();
        
      };
   
    