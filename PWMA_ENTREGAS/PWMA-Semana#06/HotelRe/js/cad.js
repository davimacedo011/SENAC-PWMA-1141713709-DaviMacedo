
    
   const form = document.querySelector("#form");
   const nomeInput = document.querySelector("#nome");
   const usuInput = document.querySelector("#usuario");
   const senhaInput = document.querySelector("#senha");
    
     
   form.addEventListener("submit", (event)=>{
        event.preventDefault();

        //login vazio
        if(nomeInput.value === ""){
            alert("Por favor, preencha seu nome")
            return;
        }
        if(senhaInput.value){
            alert("Cadastro completo")
            return;
        }
        form.submit();

    })
    