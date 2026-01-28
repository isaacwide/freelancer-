const elemento = document.getElementById("miformilario");


elemento.addEventListener("submit", e =>{
    e.preventDefault();
    try{
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let mail = document.getElementById("mail").value;
        let comentary = document.getElementById("comentary").value;


        if (name == "" && phone == "" && mail == ""){

                alert("informacion no valida")
        }else{

            let data = {
                "nombre":name,
                "phone":phone,
                "mail":mail,
                "comentary":comentary
            }

            alert(`${name} gracias por la informacion`);

            elemento.reset();
        }
    }catch(error){
        alert('Error no se puedo comunicar ')
    }
});