export class UserInfoModel {
    constructor(_id, _password, _last_login, _is_superuser, _username, _first_name, _last_name, _email, _is_staff, _is_active, _date_joined, _groups, _user_permissions) {
        this.id = _id;
        this.password = _password;
        this.last_login = _last_login;
        this.is_superuser = _is_superuser;
        this.username = _username;
        this.first_name = _first_name;
        this.last_name = _last_name;
        this.email = _email;
        this.is_staff = _is_staff;
        this.is_active = _is_active;
        this.date_joined = _date_joined;
        this.groups = _groups;
        this.user_permissions = _user_permissions;
    }
}