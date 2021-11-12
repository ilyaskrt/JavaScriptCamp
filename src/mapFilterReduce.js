// Sepete eklenmiş olan ürünlerimiz:
let cart=[
    {id:1, productName:"Bilgisayar",quantity:2,unitPrice:6000},
    {id:2, productName:"Telefon",quantity:1,unitPrice:4000},
    {id:3, productName:"Bardak",quantity:3,unitPrice:25},
    {id:4, productName:"Kulaklık",quantity:2,unitPrice:600},
    {id:5, productName:"Kalem",quantity:5,unitPrice:6},
]

//tek tek dolaşmayı sağlar ve istersen yeni dizi verir, takma isim verir o anki ürüne (product) her biri için yazdır
cart.map(product => {
    console.log(product.productName + " : " + product.unitPrice * product.quantity)
})

//toplam fiyatı hesaplıyoruz, başlangıç için bir acc lazım kaçtan başlayacağımızı belirtiyoruz. 0 olarak
let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity,0)
console.log(total)

//filtreleme yapmak için, yeni bir array oluşturma amacı vardır
//2 adetten fazla olan ürünleri bulur
let quantityOver2 = cart.filter(product => product.quantity>2)
console.log(quantityOver2)

//Frontend de (React,Angular gibi) dataları yönetirken dikkat etmek gereken durum yönetimi
//Data değiştiğinde bildirilmeli, push ettiğinde sepetin adresi değişmiyor, sayfa yenilenmeli
//Sepete ekle kısmı:

function addToCart(sepet) {
    sepet.push({id:6,productName:"Kablo",quantity:1,unitPrice:50})
    
}
addToCart(cart)
console.log(cart)
//referans tip olduğu için sorun olmadı, ama değer tipler aynı şekilde davranmıyor.