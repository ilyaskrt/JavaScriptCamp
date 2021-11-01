//js tip güvenli değil başta ne tanımlarsan öyle devam eder
let dolarDun = 9.20
let dolarBugun = 9.30

console.log(dolarDun)

// const ile atanan veri sabit başka bir şey atayamazsın 
const euroDun =11.2

console.log(euroDun)
let konutKredileri =["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
console.log("<ul>")
    for(let i = 0 ; i<konutKredileri.length; i++){
       console.log("<li>"+ konutKredileri[i] +"</li>")
    }
console.log("</ul>")


 //{
//     <ul>
//         <li>Konut</li>
//         <li>Emlak</li>
//         <li>Kamu</li>
//     </ul>

// }
console.log(konutKredileri)
