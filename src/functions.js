function addToCard(quantity,productName="elma") {
    //eger paremetreye deger gonderilmezse default deger olarak elma yazmis olur
    //yalnizca adet ile çagırıp default elmayi kullanabilmek icin defaultlu parametreyi sona yazdik
    
    addToCard(10) // örn.
    console.log("Sepete eklendi: " + productName +" adet: "+quantity)
}

//fonksiyonu değişkene atayabiliyoruz
let sayHello = ()=>{
    console.log("Hello World!")
}
sayHello()

// let sayHello2 = function() {}  seklindede tanimlama yapabiliriz

function addToCart2(productName,quantity,unitPrice) {
    // böyle olmasi kafa karistirici
}


//obje tanimi {} icerisinde
let product1 ={productName:"Elma",unitPrice:10,quantity:15}
function addToCart3(product) {
    console.log("Ürün: "+product.productName+" Fiyatı: "+product.unitPrice+" Adedi: "+product.quantity)
}

addToCart3(product1)

function addToCart4(products) {
    console.log(products)
}

let products=[
    {productName:"Elma",unitPrice:10,quantity:15},
    {productName:"Armut",unitPrice:12,quantity:15},
    {productName:"Karpuz",unitPrice:20,quantity:15}
]
addToCart4(products)

//yolladigin parametreler array seklinde tutulur ...numbers ile rest operatörü denir
function add(...numbers) {
    let sonuc = 0;
    for(let i = 0;i < numbers.length; i++){
        sonuc = sonuc + numbers[i]
    }
    console.log(sonuc)
}
add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers =[10,20,30,40]
console.log(Math.max(...numbers)) // dizi elemanlarini ayirdi 

// dizi şeklinde tanımlama yapıp icindeki verileri diziye atayabilirsin
// let [x,y,z] = [1,2,3] şeklinde x 1 y 2 z 3 olur

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu" , population:"20M"},
    {name:"Marmara" , population:"30M"},
    {name:"Karadeniz" , population:"10M"},
    [
        ["Ankara,Konya"],//iç anadolu şehirlerine atadı
        ["İstanbul,Bursa"]
    ]
]
console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)

//objeninde elemanlarını değişkene atamak icin;

let newProductName, newUnitPrice, newQuantity
//kod bloğu olmadigini belirmek için () içinde yazariz
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} 
 = {productName:"Elma",unitPrice:10,quantity:15})

 console.log(newProductName)
 console.log(newUnitPrice)