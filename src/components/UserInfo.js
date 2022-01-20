export class UserInfo {
    constructor( {nameSelector, infoSelector, avatarSelector} ) {
        this._userName = document.querySelector(nameSelector);
        this._userInfo = document.querySelector(infoSelector);
        this._userAvatar = document.querySelector(avatarSelector);

    }
    setUserInfo({name, about, avatar}) {
        this._userName.textContent = name;
        this._userInfo.textContent = about;
        this._userAvatar.src = avatar;
    }
    getUserInfo() {
        return {
            name: this._userName.textContent,
            info: this._userInfo.textContent,
        }
    }
}