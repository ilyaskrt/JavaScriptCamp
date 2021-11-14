//componentlerde kullanıcıya gösterilen veri tiplerine genel verilen isim model

export default class User {
    //yapıcı blok new lediğin sırada bu constructor çalıştı 
    constructor(id, firstName, lastName, city) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
    }
}