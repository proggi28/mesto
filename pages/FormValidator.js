export class FormValidator {
    constructor(validationConfig, formElement, inputElement) {
        this._formSelector = validationConfig.formSelector;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._inputInvalidClass = validationConfig.inputInvalidClass;
        this._formElement = formElement;
        this._inputElement = inputElement;
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._inputErrorClass);
    };
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
        errorElement.textContent = '';
        errorElement.classList.remove(this._inputErrorClass);
    };
    
    _checkInputValidity = (inputElement) => {
        const isInputNotValid = !inputElement.validity.valid;
            if (isInputNotValid) {
              const errorMessage = inputElement.validationMessage;
                inputElement.classList.add(this._inputInvalidClass)
                this._showInputError(errorMessage);
            } else {
                inputElement.classList.remove(this._inputInvalidClass)
                this._hideInputError();
            }
    }
    _toggleButtonState() {
      const hasNotValidInput = this._inputList.some(
        (inputElement) => !inputElement.validity.valid
      );

          if (hasNotValidInput) {
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
              this._checkInputValidity();
              this._toggleButtonState();
            });
          });
          this._toggleButtonState();
    }
    enableValidation() {
      const formElements = document.querySelectorAll(this._formSelector);
      const formList = Array.from(formElements);
    
      formList.forEach((formElement) => {
        this._setEventListenersValidate();
      });
    }
}