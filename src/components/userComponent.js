import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

//ekranımız gibi düşünebiliriz. ekranın parçaları
console.log("user component yüklendi.")
let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

//kullanıcıdan gelen veriyi bir objeye atanır
let user1=new User(1,"İlyas","Kurt","Bursa"); 
let user2=new User(2,"İls","Krt","istanbul"); 
userService.add(user1)
userService.add(user2)
console.log(userService.list())
console.log(userService.getById(2))



let customer = {id:1,firstName:"İlyas"}
//olmayan bir elemanı set edebildik.
//prototyping
customer.lastName = "kurt"