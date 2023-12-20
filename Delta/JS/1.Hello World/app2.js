// for(let i=0;i<=20;i++){
//     if(i%2==0)
//         continue;
//     else
//         console.log(i);
// }


// let n = prompt("Input a Number : ");
// n = parseInt(n);

// for(let i=1;i<=10;i++){
//     console.log(n*i);
// }

let favouriteMovie = "avtar";
let input = prompt("guess a favourite movie or 'quit' for exit : ");

while(1){
    if(input == "quit"){
        alert("You are disqualified...");
        break;
    }
    else if(input == favouriteMovie){
        alert("You have Qualified..")
        break;
    } else{
        alert("Try Again");
        input = prompt("Input agin another Favourite Movie : ");
    }
}