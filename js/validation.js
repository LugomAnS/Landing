//#region Name validation and handler
function nameValidation (name) {
  const regExp = /^[A-Za-zА-Яа-я\s]+$/;
  return name.trim() !== '' && regExp.test(name) ;
}

function nameInputHadler() {
  let nameInput = document.getElementById('name-input');
  let nameError = document.getElementById('name-input__error');

  nameInput.addEventListener('input', (e) => {
  if (nameValidation(nameInput.value)) {
    nameInput.classList.remove('form__input--error');
    nameError.classList.remove('form__error--active');
  }
  else {
    nameInput.classList.add('form__input--error');
    nameError.classList.add('form__error--active');
  }

  })
}

//#endregion

//#region Phone validation and handler
function phoneValidation (phone) {
  return phone.length === 14
}

function phoneInputHandler() {
  let phoneInput = document.getElementById('phone-input');
  let phoneError = document.getElementById('phone-input__error');

  phoneInput.addEventListener('input', () => {
    phoneInput.classList.remove('form__input--error');
    phoneError.classList.remove('form__error--active');
		let arr = phoneInput.value.replace(/[^\dA-Z]/g, '').replace(/[\s-)(]/g, '').split('');
		if(arr.length >= 1) arr.splice(0, 0, '(');
		if(arr.length > 4) arr.splice(4, 0, ') ');
		if(arr.length > 8) arr.splice(8, 0, '-');
		phoneInput.value = arr.toString().replace(/[,]/g, '').slice(0, 14);
	});
}

//#endregion

//#region Form send handler
function formSendHandler() {
  const nameInput = document.getElementById('name-input');
  const nameError = document.getElementById('name-input__error');
  const phoneInput = document.getElementById('phone-input');
  const phoneError = document.getElementById('phone-input__error');

  const form = document.getElementById('form');

  form.addEventListener('submit', (e) => {
    if(!nameValidation(nameInput.value)) {
      e.preventDefault();
      nameInput.classList.add('form__input--error');
      nameError.classList.add('form__error--active');
    }

    phoneInput.classList.remove('form__input--error');
    phoneError.classList.remove('form__error--active');

    if (!phoneValidation(phoneInput.value)) {
      e.preventDefault();
      phoneInput.classList.add('form__input--error');
      phoneError.classList.add('form__error--active');
    }
  })
}
//#endregion

document.addEventListener('DOMContentLoaded', () => {
  nameInputHadler();
  phoneInputHandler();
  formSendHandler();
})
