// side bar start
function openNav(){
    'use strict';
    const sidepanel = document.getElementById("mySidepanel");
    if(sidepanel){
        sidepanel.style.left = '0';
    }else{
        console.error('Error: sidepanel not found');
        
    }
}
function closeNav(){
    'use strict';
    const sidepanel = document.getElementById("mySidepanel");
    if (sidepanel) {
        sidepanel.style.left = "-320px";
    } else {
        console.error("Error: sidepanel not found");
    }
}
// search
function open_search(){
    const searchpanel = document.getElementById("search-bar");
    if (searchpanel) {
    searchpanel.style.height = "100vh";
    searchpanel.style.borderRadius = "0";
    } else {
    console.error("Error: search sidepanel not found");
    }
}

function close_search(){
    const searchpanel = document.getElementById("search-bar");
    if (searchpanel) {
    searchpanel.style.height = "0%";
    searchpanel.style.borderTopLeftRadius = "100%";
    searchpanel.style.borderTopRightRadius = "100%";
    } else {
    console.error("Error: search sidepanel not found");
    }
}