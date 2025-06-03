//telefono debe tener exactamente 8 digitos, no es obligatoria
//contrasenia debe tener mas de 5 caracteres, es obligatoria
let datos = []
function validar(){
        let eTelefono = document.getElementById("telefono");
        let vTelefono= eTelefono.value;
        let eErrorTelefono= document.getElementById("errorTelefono");
        console.log(eTelefono)
        console.log(vTelefono)
        if(vTelefono.length>=8)
        {
            eErrorTelefono.innerText=""
            eTelefono.style.color="white"
            eTelefono.style.backgroundColor="green"
        }

        else
        {
            eErrorTelefono.innerText="Debe ingresar algun numero valido"
            eTelefono.style.backgroundColor ="red"
        }
        
        let eContraseña = document.getElementById("password");
        let vContraseña = eContraseña.value;
        let eErrorContraseña= document.getElementById("errorPassword");
        console.log(eContraseña)
        console.log(vContraseña)

        if(vContraseña.length>=5)
        {
            eErrorContraseña.innerText=""
            eContraseña.style.color="green"
            eContraseña.style.backgroundColor="white"
        }
        else
        {
            eErrorContraseña.innerText="debe ingresar alguna contraseña acorde a la cantidad requerida"
            eContraseña.style.background
        }

        let d={
            Telefono:vTelefono,
            Contraseña:vContraseña
        }
        datos.push(d)
        cargarDatos()
    }

function cargarDatos()
{
    let eCuerpoTbala= document.getElementById("cuerpoTabla");
    let DatosMap = datos.map((d,index)=>{
        return "<tr><td>"+d.Telefono+"</td><td>"+d.Contraseña+"</td>"+
        "<td><button onclick='eliminar("+index+")'>eliminar</button>" +
        "<button onclick='actualizarform("+index+")'>actualizar</button></td></tr>"
    })
    let datosSTR=DatosMap.join("");
    eCuerpoTbala.innerHTML=datosSTR;
}

function eliminar(indice) {
    datos = datos.filter((_, index) => index !== indice);
    cargarDatos();
}

function actualizarform(indice)
{
    let dato = datos[indice];
    document.getElementById("telefono1").value=dato.Telefono;
    document.getElementById("password1").value=dato.Contraseña;
    document.getElementById("Actubtn").value=indice;
}

function actualizar()
{
    let indice= parseInt(document.getElementById("Actubtn").value)
    let vTelefono = document.getElementById("telefono1").value
    let vContraseña = document.getElementById("password1").value

    datos=datos.map((d,index)=>{
        if (index===indice){
        return{
                Telefono: vTelefono,
                Contraseña: vContraseña
            };
        }
        return d;
    });
    cargarDatos()
}