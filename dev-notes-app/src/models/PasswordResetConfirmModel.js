export default class PasswordResetConfirmModel {
    constructor(_uid, _token, _new_password) {
        this.uid = _uid;
        this.token = _token;
        this.new_password = _new_password;
    }
}