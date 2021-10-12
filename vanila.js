window.addEventListener("load" , function(){
    const name = document.querySelector('#name');
    const age = document.querySelector('#age');
    const phone = document.querySelector('#phone');
    const submit = document.querySelector('#button');
    const error = document.querySelector('.error');

    let insertData = document.querySelector(".list-table table")

    submit.addEventListener("click" , function(){
        event.preventDefault();

        if(name.value == "" || age.value == "" || phone.value == ""){
            error.classList.add('show')

        }else{
            error.classList.remove('show')


            let tableRow = document.createElement('tr');
        
            let cell1 = tableRow.insertCell(0);
            let cell2 = tableRow.insertCell(1);
            let cell3 = tableRow.insertCell(2);
    
            cell1.innerHTML  =  name.value;
            cell2.innerHTML  = age.value;
            cell3.innerHTML  = phone.value;
    
    
            insertData.appendChild(tableRow)
            age.value = "";
            name.value = "";
            phone.value = "";
        }


        


    })




































})