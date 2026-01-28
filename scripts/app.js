const elemento = document.getElementById("miformilario");


elemento.addEventListener("submit", e =>{
    e.preventDefault();
    try{
        let name = document.getElementById("name").value;

        if (name == ""){
                alert("informacion no valida")
        }else{
            alert(`${name}, tendrás información pronto`);
        }
    }catch{
        alert('Error no se puedo comunicar ')
    }
});