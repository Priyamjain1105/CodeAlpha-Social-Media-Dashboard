let BaseUrl = "https://sheetdb.io/api/v1/l3so05n3czwyh"
loginBtn = document.getElementById("loginbtn");


loginBtn.addEventListener("click",async(evt)=>{
        evt.preventDefault();
        let warn = document.getElementById("warn");
        let gmail = document.getElementById("gmail").value;
        let password = document.getElementById("password").value;
        console.log(gmail,password);
        let responce = await fetch(BaseUrl);
        let data = await responce.json();
        console.log(data);
        console.log(data[0].gmail);
        let flag  = 0;
        for( let rec in data){
           if(data[rec].gmail === gmail){
            flag  = 1;
             if(data[rec].password === password){
                console.log("login succesful")
                 window.location.href = 'main.html';
                break;
             }
             else{
                console.log("Enter valid password")
                warn.innerText = "Enter Valid Password";
             }
           }     
        }
        if(flag != 1){
            console.log("Gmail not found, Please enter a valid Gmail")          
            warn.innerText = "Gmail not found, Please enter a valid Gmail";
        }

})


function signinpg(){
    window.location.href = 'sign.html';
}
function loginpg(){
    window.location.href = 'index.html';
}

var form = document.getElementById("sheetdb-form");
form.addEventListener("submit",e=>{
    e.preventDefault();
    fetch(form.action,{
        method:"POST",
        body:new FormData(document.getElementById("sheetdb-form")),
    }).then(  
        response => response.json()
     ).then((html)=>{
        window.open('index.html','_blank');
        

});
    
});





