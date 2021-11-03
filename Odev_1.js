
// 1.Soru:
//yollanıcak sayi adedi bilinmediği icin parametremiz liste şeklinde
function findPrime(...sayi) {
    let check=0;
    for(let i=0;i<sayi.length;i++){
        for(let j=2;j<sayi[i];j++){
            if(sayi[i]%j === 0){
                check+=1;
            }
        }
        if(check==0){
        console.log(sayi[i] + " asal sayidir.")    
        }
        else{
            console.log(sayi[i] + " asal sayi degildir.")   
        }
        check=0;
    }
}
findPrime(10,29,13,7)

// 2.Soru:
function isFriends(friend1 , friend2){
    let sum_one = 0;
    let sum_two = 0;

    for(let i = 1 ; i < friend1 ; i++){
        if(friend1 % i == 0){
            sum_one = sum_one + i;
        }
    }
    for(let j = 1 ; j < friend2 ; j++){
        if(friend2 % j==0){
            sum_two = sum_two + j;
        }
    }
    if(friend1 == sum_two && friend2 == sum_one){
        console.log(friend1 , friend2 ," arkadas sayilardir.")
    }
    else {console.log("Arkadaş sayi değiller.")}
}

isFriends(220,284)

// 3.Soru:
    
    for(let i = 1 ; i < 1000 ; i++){
        let sum_Number = 0;
        for(let j = 1 ; j < i ; j++){
            if(i % j == 0){
                sum_Number += j; 
            }
        }
        if(sum_Number == i){
            console.log(i);
        }
    } 

// 4.Soru:
let check = 0;
for(let i = 2 ; i < 1000 ; i++){
    for(let j = 1 ; j < i ; j++){
        if( i % j == 0){
            check+=1;
        }
    }
    if(check==0){
        console.log(i + " asal sayidir.")    
    }
    else{
        console.log(i + " asal sayi degildir.")
    }
    check = 0;
}

