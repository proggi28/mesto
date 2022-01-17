export class UserInfo {
    constructor( {nameSelector, infoSelector, avatarSelector} ) {
        this._userName = document.querySelector(nameSelector);
        this._userInfo = document.querySelector(infoSelector);
        this._avatar = document.querySelector(avatarSelector);

    }
    setUserInfo({name, info, avatar}) {
        this._userName.textContent = name;
        this._userInfo.textContent = info;
        this._avatar.src = avatar;
    }
    getUserInfo() {
        return {
            name: this._userName.textContent,
            info: this._userInfo.textContent,
        }
    }
}