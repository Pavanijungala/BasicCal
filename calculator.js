const dispaly= document.getElementById("disp");
console.log(dispaly);
function appendToDisplay(inp){
    dispaly.value+=inp;
}
function cleardisplay(){
    
    dispaly.value=" ";
}
function calculate(){
    try{
    dispaly.value=eval( dispaly.value);
    }
    catch(error)
    {
        dispaly.value="Error";
    }

}