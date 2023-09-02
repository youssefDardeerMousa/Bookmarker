var Name=document.getElementById("Name"); // input
var Url=document.getElementById("Url");   // input
var Submit=document.getElementById("Submit"); // button
var myNameP=document.getElementById("myNameP"); // p name
var myUrlP=document.getElementById("myUrlP"); //p url
var myDisplay =document.getElementById("myDisplay");

var myArr;
(function(){
    if(localStorage.getItem("data")==null){
        myArr=[];
    }
    else{
           myArr= JSON.parse(localStorage.getItem("data"));
            display()
        }
}())



Submit.addEventListener("click",function(){
    (function(){
        if(Name.value==""){
            myNameP.classList.add("NameP");
            myNameP.innerHTML="Name is required"
        }
         if(Name.value!=""){
            myNameP.classList.remove("NameP");
            myNameP.innerHTML=""
        }

        if(Url.value==""){
            myUrlP.classList.add("NameP");
            myUrlP.innerHTML="URL is required"
        }
         if(Url.value!=""){
            myUrlP.classList.remove("NameP");
            myUrlP.innerHTML=""
        }
    }())
    if(Name.value!="" && Url.value!=""){
        var myObject1={
            inputName:Name.value,
            inputUrl:Url.value
        }
        // console.log(myArr);
        isFound()
        if(isFound()!=true){
            myArr.push(myObject1);

        }
    }
    display();
   
     localStorage.setItem("data",JSON.stringify(myArr));
    // y=localStorage.getItem("data")
    Name.value="";
    Url.value="";
    
})

function display(){
    var box=``;
    for(var i=0;i<myArr.length;i++){
     
        box+=`
        
        <div class="child d-flex justify-content-between w-75 p-4  border border-1 border-danger m-auto my-3">
        <p class="d-inline-block mt-3">${myArr[i].inputName}</p>
        <div class="btns d-inline-block">
        
        <a href="${visit(i)}" target="_blank" class="btn btn-primary d-inline-block " onclick="visit(${i})" id="Visit">Visit</a> 
          <button  class="btn btn-danger d-inline-block " id="Delete" onclick="myDelete(${i})">Delete</button>
        </div>
      </div>
      
        
        `
       
    }
    myDisplay.innerHTML=box;
}

function myDelete(index){
  
    myArr.splice(index,1);
    display();
    localStorage.setItem("data",JSON.stringify(myArr));
}
var Visit=document.getElementById("Visit");    // VisitBtn
// console.log(i);
function visit(myvisit){
    

   
    var web=`${myArr[myvisit].inputUrl}`;
    if(web!=`https://`)
    {
        web=`https://`+web;
        return web;
    }
    else{
        return web; 

    }
}

// console.log);
// function isFound(){
//     var ii=JSON.parse((localStorage.getItem("data")));

// for(var v=0;v<ii.length;v++){
//     if(Name.value==ii[v].inputName){
//         myNameP.classList.add("NameP");
//         myNameP.innerHTML="Name is Alrady Exist"
//         return true;
//     }
   
// }

// }


function isFound(){
    // var ii=JSON.parse((localStorage.getItem("data")));

for(var i=0;i<myArr.length;i++){
    if(Name.value==myArr[i].inputName){
        myNameP.classList.add("NameP");
        myNameP.innerHTML="Name is Alrady Exist"
        return true;
    }

    if(Url.value==myArr[i].inputUrl){
        myUrlP.classList.add("NameP");
        myUrlP.innerHTML="URL is Already Exist"
        return true;
    }
   
}

}

