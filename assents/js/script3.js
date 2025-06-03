//telefono debe tener exactamente 8 digitos, no es obligatoria
//contrasenia debe tener mas de 5 caracteres, es obligatoria

let datos = []

function validar()
    {
        let eTelefono = document.getElementById("Teléfono")
        let vTelefono = document.getElementById(eTelefono)

    if(vTelefono.Lenght>=8)
        {

            vTelefono.style.backgroundColor="green"
            vTelefono.style.color="white"
            console.log(vTelefono)
        }
    }