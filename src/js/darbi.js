function submit_input_form(){
    let fromForm = document.getElementById("PD_input_form_Id");
    let inputText ="";
    for(i=0; i<fromForm.length; i++){
        inputText += fromForm.elements[i].value;
    }

}