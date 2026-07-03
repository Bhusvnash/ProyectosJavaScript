const txtNombre = document.querySelector('#txtNombre'),
  txtApellido = document.querySelector('#txtApellido'),
  txtEdad = document.querySelector('#txtEdad'),
  AddTxtSaldo = document.querySelector('#AddTxtSaldo')
//#_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
txtEdad.addEventListener('change', (e) => {
  console.log(e)
  let edad = parseInt(txtEdad.value)
  if (edad >= 18) {
    const input = document.createElement('input')
    input.type = 'Number'
    input.classList.add('form-control', 'mt-1')
    input.placeholder = 'Saldo'
    input.id = 'txtSsaldo'
    AddTxtSaldo.appendChild(input)
  }
})
/*
Al ingresar los valores de los inputs se debe validar que no queden 
vacíos, si se dejan vacíos se debe resaltar el borde en rojo y llenar el \
fondo en amarillo para cada input.
*/
txtNombre.addEventListener('blur', () => {
  if (txtNombre.value.trim() == '') {
    alert('Debe llenar el campo Nombre! ')
    txtNombre.classList.add('invalido')
  } else {
    txtNombre.classList.remove('invalido')
  }
})
txtApellido.addEventListener('blur', () => {
  if (txtNombre.value.trim() == '') {
    alert('Debe llenar el campo Nombre! ')
    txtNombre.classList.add('invalido')
  } else {
    txtNombre.classList.remove('invalido')
  }
})
txtEdad.addEventListener('blur', () => {
  if (txtNombre.value.trim() == '') {
    alert('Debe llenar el campo Nombre! ')
    txtNombre.classList.add('invalido')
  } else {
    txtNombre.classList.remove('invalido')
  }
})
