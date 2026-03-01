const txtNombre = document.querySelector('#txtNombre'),
  txtApellido = document.querySelector('#txtApellido'),
  txtEdad = document.querySelector('#txtEdad'),
  AddTxtSaldo = document.querySelector('#AddTxtSaldo')

txtEdad.addEventListener('change', () => {
  let edad = parseInt(txtEdad.value)
  let inputExistente = document.querySelector('#txtSaldo')
  if (!isNaN(edad) && edad >= 18) {
    if (!inputExistente) {
      const input = document.createElement('input')
      input.type = 'number'
      input.classList.add('form-control', 'mt-1')
      input.placeholder = 'Saldo'
      input.id = 'txtSaldo'
      AddTxtSaldo.appendChild(input)
    }
  } else {
    if (inputExistente) {
      AddTxtSaldo.removeChild(inputExistente)
    }
  }
})

txtNombre.addEventListener('blur', () => {
  if (txtNombre.value.trim() === '') {
    alert('Debe llenar el campo Nombre!')
    txtNombre.classList.add('invalido')
  } else {
    txtNombre.classList.remove('invalido')
  }
})

txtApellido.addEventListener('blur', () => {
  if (txtApellido.value.trim() === '') {
    alert('Debe llenar el campo Apellido!')
    txtApellido.classList.add('invalido')
  } else {
    txtApellido.classList.remove('invalido')
  }
})

txtEdad.addEventListener('blur', () => {
  if (txtEdad.value.trim() === '') {
    alert('Debe llenar el campo Edad!')
    txtEdad.classList.add('invalido')
  } else {
    txtEdad.classList.remove('invalido')
  }
})
