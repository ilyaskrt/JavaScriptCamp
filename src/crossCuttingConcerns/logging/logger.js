export class BaseLogger{
    //farklı yerlere yazmak istiyorsan farklı farklı claslar oluşturduk
    log(data){
        console.log("Default logger: " + data)
    }
}

//elastic searche yapılan log örn;
//baseloggerdaki tüm operasyonlara bunlarda da sahip oluyoruz
export class ElasticLogger extends BaseLogger{
    //burda log u tekrar tanımlamasak BaseLogger da olan log burda da geçerli
    log(data){
        console.log("Logged to Elastic" + data)
    }
}
export class MongoLogger extends BaseLogger{
    
    log(data){
        console.log("Logged to Mongo" + data)
    }
}