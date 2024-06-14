// @ts-nocheck
let miFormulario = document.getElementById( "miForm" )
let inputApellidos = document.getElementById( 'lastName' )
let miTextArea = document.getElementById( 'message' )

inputApellidos.setAttribute( 'pattern', /[a-zA-Z]+/g )
miTextArea.setAttribute( 'pattern', '^[A-Za-z0-9\\s.,;:!?\\"()\\-]{1,256}$' );

function validarSoloLetras( texto = '' ) {
  let expresionRegularLetras = texto.match( /^[A-Za-z0-9\s.,;:!?'\"()\-]{1,256}$+/g );
  return expresionRegularLetras
}

function validarCorreo( texto = "" ) {
  let expresionRegularLetras = texto.match( /^\S+@\S+\.\S+$/ );
  return expresionRegularLetras
}

miFormulario.onsubmit = ( evento ) => {
  evento.preventDefault()

  let formulario = evento.target
  let dataDeMiFormulario = new FormData( formulario )
  let misEntradas = Object.fromEntries( dataDeMiFormulario.entries() )
  // let misNombres = misEntradas.nombres.toUpperCase()
  // let misApellidos = misEntradas.apellidos.toLocaleLowerCase()
  const { firstName, lastName, emailAddress, querytype, message } = misEntradas
  let nombres = firstName
  let apellidos = lastName
  let correo = emailAddress
  let consulta = querytype
  let mensaje = message

  let nombresValidados = validarSoloLetras( nombres.toString() )
  let apellidosValidados = validarSoloLetras( apellidos.toString() )

  let validarEmail = validarCorreo( correo.toString() )

  let validarMensaje = validarSoloLetras( mensaje.toString() )

  console.log( validarEmail, 'email' )


  // console.log(nombres,apellidos,correo,consulta,mensaje)

}

// { first-name: '', last-name: '', email-address: '', query- type: 'General Enquiry', message: '', … }
// email-address
// :
// ""
