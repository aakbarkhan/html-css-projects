// select the input tag 
let ent=document.querySelector(".input");

var root = document.querySelector(".root");

// // type the email
let emails=[];
// // press the enter key
ent.addEventListener("keyup", enterKeyPress);

// // save the email once enter key is press
function enterKeyPress(e){
//     // check  whether user has type enter key or not
// console.log(e);

    if (event.keyCode==13){
        // create an element with h1 tag and assign to the var heaader 

    // in that header var we need to put some text by using .innertext
    // headerli.innerText = ent.value;  //
    if(ent.value.length>0){
        emails.push(ent.value);
        ent.value = "" //
        console.log(emails)
        displayData();
    }else {
        alert("email is empty");
    }
    
   
// now a div with class .root is selected from the index.html by using the query selctor and var root is assign.

    
// var childli=document.querySelector("headerli");
// by using append child we push the header elements inside the div that is created in the div tag
        
    }   
}

function displayData(){
    root.innerText = "";
    

    for (let i=0;i<emails.length;i++){
        console.log(emails[i]);
        

        var headerli=document.createElement("li");
        var btn=document.createElement("button");
        var lineNew=document.createElement("p");
        btn.innerText="Click Delete!";

        lineNew.innerText=emails[i];
        headerli.appendChild(lineNew);
        headerli.appendChild(btn);
        btn.id=emails[i]
        root.appendChild(headerli);

        btn.addEventListener("click", deleteitem);
       
    }
}

function deleteitem(e){
    var btnId = e.target.id;
    var index = emails.indexOf(btnId);
    emails.splice(index,1);
    displayData();
}



// let entt=document.querySelector(".input");

//  entt.addEventListener("keyup", pressAny);
//  function pressAny(){
//     if (event.keyCode==13)
// var paragraph=document.createElement("button");
// paragraph.innerText="Click Delete!";
// var head=document.querySelector(".heading");
// head.appendChild(paragraph);
//  }



//  let btn=document.querySelector("button");
//  btn.addEventListener("click",deleteBtn()){
//         delete.header=""
//  }



