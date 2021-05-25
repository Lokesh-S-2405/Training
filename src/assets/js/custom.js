function validation(){
    var fname=document.getElementById('firstName').value;
    if(fname==""){
      document.getElementById('first').innerHTML= "fill the first name field";
       return false;
    }
   }