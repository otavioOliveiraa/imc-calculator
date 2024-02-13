import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

/* peso / (altura * altura) */
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = (e) => {
  e.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeighNotANumber = notANumber(weight) || notANumber(height)
  if(weightOrHeighNotANumber) {
    alertError.open()
    return
  }
  alertError.close()

  const result = calculateIMC(weight, height)
  displayMessageResult(result)
  Modal.open()
}

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()

function displayMessageResult (result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  return;
}

