//class oluşturuyoruz
//fonksiyonları buranın içine gruplama amaçlı yazıyoruz
//export dışardan import edilebilir

export default class UserService{

    constructor(loggerServise){
        //yeni bir dizi oluştu burda db den alabilir verileri
        this.users = []
        this.loggerServise = loggerServise  
    }
    add(user){
        this.users.push(user)
        this.loggerServise.log(user)
    }
    list(){
        return this.users
    }
    getById(id){
        return this.users.find(u=>u.id===id) 
    }
}
