(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_errorHandler",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserServerInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._errorHandler)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._errorHandler)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._errorHandler)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._errorHandler)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._errorHandler)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._errorHandler)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._errorHandler)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._errorHandler)}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o){var i=o.handleCardClick,a=o.deleteCardClick,u=o.likeButtonClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=t,this._cardSelector=n,this._userId=r,this._handleCardClick=i,this._deleteCardClick=a,this._likeButtonClick=u,this._deleteCardClick=this._deleteCardClick.bind(this),this._deleteButtonHandler=this._deleteButtonHandler.bind(this),this._likeButtonClick=this._likeButtonClick.bind(this),this._toggleLike=this._toggleLike.bind(this),this.removeCard=this.removeCard.bind(this),this.addLike=this.addLike.bind(this)}var t,r;return t=e,(r=[{key:"_getCard",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getCard(),this._cardText=this._element.querySelector(".card__title"),this._selectCard=this._element.querySelector(".card__image"),this._cardDeleteButton=this._element.querySelector(".card__button-delete"),this._cardLikeButton=this._element.querySelector(".card__heart"),this._likeCounter=this._element.querySelector(".card__like-length"),this._setEventListeners(),this._cardText.textContent=this._card.name,this._selectCard.src=this._card.link,this._selectCard.alt=this._card.name,this._likeCounter.textContent=this._card.likes.length,this._elementId=this._card._id,this._userId!==this._card.owner._id&&(this._cardDeleteButton.style.display="none"),this._element}},{key:"_checkLikes",value:function(){var e=this;this._card.likes.some((function(t){t._id===e._userId&&e._cardLikeButton.classList.add("card__heart_active")}))}},{key:"_setEventListeners",value:function(){var e=this;this._cardDeleteButton.addEventListener("click",this._deleteButtonHandler),this._cardLikeButton.addEventListener("click",this._toggleLike),this._selectCard.addEventListener("click",(function(){return e._handleCardClick(e._card.link,e._card.name)}))}},{key:"_toggleLike",value:function(e){this._likeButtonClick(e.target,this._elementId)}},{key:"_deleteButtonHandler",value:function(){this._deleteCardClick(this._element,this._elementId,this.removeCard)}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"addLike",value:function(e){this._cardLikeButton.classList.toggle("card__heart_active"),this._likeCounter.textContent=e.length}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){i._isInputNotValid=!e.validity.valid,i._isInputNotValid?(i._errorMessage=e.validationMessage,i._showInputError(e)):i._hideInputError(e)},(r="_checkInputValidity")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._inputInvalidClass=t.inputInvalidClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));t.textContent=this._errorMessage,t.classList.add(this._inputErrorClass),e.classList.add(this._inputInvalidClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._inputErrorClass),e.classList.remove(this._inputInvalidClass)}},{key:"toggleButtonState",value:function(){this._hasNotValidInput=this._inputList.some((function(e){return!e.validity.valid})),this._hasNotValidInput?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListenersValidate",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState(t)}))}))}},{key:"deleteValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),e.toggleButtonState()}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("input",(function(e){e.preventDefault()})),this._setEventListenersValidate()}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;this._items=e,this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addOneItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._handleEscUp=this._handleEscUp.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscUp)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscUp)}},{key:"_handleEscUp",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closePopupByClickOnOverlay",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("click",(function(t){return e._closePopupByClickOnOverlay(t)}))}}])&&c(t.prototype,n),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},p(e,t,n||e)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popupElement.querySelector(".popup-image__image"),t._popupText=t._popupElement.querySelector(".popup-image__text"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=e,this._popupImage.alt=t,this._popupText.textContent=t,p(_(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),a}(l);function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){var n=t.nameSelector,r=t.infoSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;console.log("name = '".concat(t,"';\ninfo = '").concat(n,"';\navatar = '").concat(r,"'.")),this._userName.textContent=t,this._userInfo.textContent=n,this._userAvatar.src=r}},{key:"getUserInfo",value:function(){return{name:this._userName.textContent,info:this._userInfo.textContent}}}])&&v(t.prototype,n),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},g(e,t,n||e)}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function C(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submit=t,n._popupForm=n._popupElement.querySelector(".popup__form"),n._submitButton=n._popupForm.querySelector(".popup__save-button"),n._inputList=n._popupElement.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;g(S(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){g(S(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&k(t.prototype,n),a}(l);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},I(e,t,n||e)}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popupElement.querySelector(".popup__form"),n._handleCardDelete=t,n}return t=a,(n=[{key:"open",value:function(e,t,n){I(B(a.prototype),"open",this).call(this),this._card=e,this._cardId=t,this.deleteCard=n}},{key:"cardId",value:function(){return this._cardId}},{key:"setEventListeners",value:function(){var e=this;I(B(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleCardDelete(e._card,e._cardId,e.deleteCard)}))}}])&&O(t.prototype,n),a}(l),T=document.querySelector(".popup_type_profile"),R=document.querySelector(".popup_type_add-card"),U=document.querySelector(".popup-image"),x=document.querySelector(".popup-delete"),V=document.querySelector(".popup-avatar"),A=document.querySelector(".profile__edit-button"),D=T.querySelector(".popup__form"),H=T.querySelector(".popup__input_type_name"),N=T.querySelector(".popup__input_type_job"),F=document.querySelector(".cards__list-style"),M=document.querySelector(".profile__add-button"),J=R.querySelector(".popup__save-button_add_card"),G=document.querySelector(".popup__form_add_element"),z=document.querySelector(".profile__image-button"),$=(document.querySelector(".popup__save-button_button-avatar"),".profile__title"),K={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input-error",inputInvalidClass:"popup__error-visible"};function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W,X=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"772a000d-3f96-41bc-86aa-236e12ab469e","content-type":"application/json"}}),Y=new y(U),Z=new i(K,D),ee=new i(K,G),te=new m({nameSelector:$,infoSelector:".profile__text",avatarSelector:".profile__avatar"}),ne=new w(T,(function(e){ne.renderLoading(!0),X.editProfile({name:e.name,about:e.info,avatar:e.avatar}).then((function(e){te.setUserInfo(e),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){ne.renderLoading(!1)}))})),re=new w(R,(function(e){re.renderLoading(!0),X.addCard({name:e.title,link:e.url}).then((function(e){var t=ue(e);ae.addOneItem(t),re.close(),G.reset(),ee.toggleButtonState(),ee.deleteValidation()})).catch((function(e){return console.log(e)})).finally((function(){J.textContent="Создать"}))})),oe=new w(V,(function(e){oe.renderLoading(!0),X.editAvatar({name:e.name,about:e.info,avatar:e.avatar}).then((function(t){console.log({about:e.info}),te.setUserInfo(t),oe.close()})).catch((function(e){return console.log(e)})).finally((function(){oe.renderLoading(!1)}))})),ie=new q(x,(function(e,t,n){X.deleteCard(t).then((function(){n(),ie.close()})).catch((function(e){console.log(e)}))})),ae=new u({renderer:function(e){ae.addItem(ue(e))}},F);function ue(e){var t=new r(e,".item-template",W,{handleCardClick:ce,deleteCardClick:function(e,t,n){ie.open(e,t,n)},likeButtonClick:function(e,n){e.classList.contains("card__heart_active")?X.deleteLike(n).then((function(e){t.addLike(e.likes)})).catch((function(e){console.log(e)})):X.addLike(n).then((function(e){t.addLike(e.likes)})).catch((function(e){console.log(e)}))}});return t.generateCard()}function ce(e,t){Y.open(e,t)}Promise.all([X.getUserServerInfo(),X.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];console.log(o),W=o._id,ae.renderItems(i),te.setUserInfo(o)})).catch((function(e){console.log(e)})),A.addEventListener("click",(function(){ne.open(),H.value=te.getUserInfo().name,N.value=te.getUserInfo().info})),M.addEventListener("click",(function(){re.open(),ee.deleteValidation()})),z.addEventListener("click",(function(){oe.open()})),ne.setEventListeners(),re.setEventListeners(),oe.setEventListeners(),Y.setEventListeners(),ie.setEventListeners(),Z.enableValidation(),ee.enableValidation()})();