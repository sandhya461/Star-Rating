const star1 = document.getElementById("s1");
const e_wo = document.getElementById("woarst");
const e_ba = document.getElementById("bad");
const e_ne = document.getElementById("neutral");
const e_go = document.getElementById("good");
const e_ex = document.getElementById("excellent");

function worst() {
    if(e_wo.style.display==="none"){
        e_wo.style.display ="block";
        e_ba.style.display ="none";
        e_ne.style.display ="none";
        e_go.style.display ="none"
        e_ex.style.display="none";
    }
     else{
        e_wo.style.display ="none";
     }
      
}

function bad() {
    if(e_ba.style.display==="none"){
        e_ba.style.display ="block";
        e_wo.style.display ="none";
        e_ne.style.display ="none";
        e_go.style.display ="none"
        e_ex.style.display="none";
    }
    
    else{
        e_ba.style.display ="none";
    }
  
}


function neutral() {
    if(e_ne.style.display==="none"){
        e_ne.style.display ="block";
        e_ba.style.display ="none";
        e_wo.style.display ="none";
         e_go.style.display ="none"
        e_ex.style.display="none";
    }
    
    else{
        e_ne.style.display ="none";
    }
  
}

function good() {
    if(e_go.style.display==="none"){
        e_go.style.display ="block"
        e_ne.style.display ="none";
        e_ba.style.display ="none";
        e_wo.style.display ="none";
        e_ex.style.display="none";
    }
    
    else{
        e_go.style.display ="none";
    }
  
}

function excellent() {
    if(e_ex.style.display==="none"){
        e_ex.style.display="block";
        e_go.style.display ="none"
        e_ne.style.display ="none";
        e_ba.style.display ="none";
        e_wo.style.display ="none";
       
    }
    
    else{
        e_ex.style.display ="none";
    }
  
}




