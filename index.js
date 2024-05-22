function func(){
    document.getElementById("here").src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" 
    +document.getElementById("textorurl").value;
}

document.getElementById("submitLink").addEventListener("click", function(event) {
    var url = document.getElementById("textorurl").value;
    var uval = url.length;
    if (uval==0 ) {
        alert("No Text or URL found! Please Try Again.");
        event.preventDefault(); 
        location.reload();
    }
    
});