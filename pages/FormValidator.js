export class FormValidator {
    constructor(validationConfig, formElement) {
        this._formSelector = validationConfig.formSelector;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._inputInvalidClass = validationConfig.inputInvalidClass;
        this._formElement = formElement;
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
        errorElement.textContent = this._errorMessage;
        errorElement.classList.add(this._inputErrorClass);
    };
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
        errorElement.textContent = '';
        errorElement.classList.remove(this._inputErrorClass);
    };
    
    _checkInputValidity = (inputElement) => {
        this._isInputNotValid = !inputElement.validity.valid;
            if (this._isInputNotValid) {
              this._errorMessage = inputElement.validationMessage;
                inputElement.classList.add(this._inputInvalidClass)
                this._showInputError(inputElement);
            } else {
                inputElement.classList.remove(this._inputInvalidClass)
                this._hideInputError(inputElement);
            }
    }
    _toggleButtonState() {
      this._hasNotValidInput = this._inputList.some(
        (inputElement) => !inputElement.validity.valid
      );

          if (this._hasNotValidInput) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute("disabled", true);
          } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute("disabled");
          }
    }
    _setEventListenersValidate() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
          });
        
          this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
          this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        
          this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
              this._checkInputValidity(inputElement);
              this._toggleButtonState(inputElement);
            });
          });
    }

    deleteValidation() {
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
        this._toggleButtonState();
    })
    };

    enableValidation() {
      this._formElement.addEventListener('input', (evt) => {
        evt.preventDefault();
      });
      this._setEventListenersValidate();
}
}