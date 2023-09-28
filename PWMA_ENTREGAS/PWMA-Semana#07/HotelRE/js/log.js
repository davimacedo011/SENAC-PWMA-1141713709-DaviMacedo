
    const form = document.querySelector("#form");
    const loginInput = document.querySelector("#login");
    const senhaInput = document.querySelector("#senha");
   
    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        //login vazio
        if(loginInput.value === ""){
            alert("Por favor, preencha seu login")
            return;
        }
        if(loginInput.value){
            alert("Login completo")
            return;
        }
        form.submit();
        
    })