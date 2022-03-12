class User{
    constructor(){
        this.id = [1,2];
        this.name = ["susi", "susanti"];
        this.password;
    }
}

class UserService extends User{
    constructor(id,name){
        super(id,name)
        this.users = [...this.name];
    }

getAllUsers() {
    return this.users;
}

getUserById(userId) {
    return this.users.filter((element) => element == userId);
}
}

// 1. Code tidak menggunakan camel case
// 2. Penamaan kelas harusnya menggunakan pascal case
// 3. Pada line 11 tidak diperlukan add user
// 4. Tidak terdapat komentar