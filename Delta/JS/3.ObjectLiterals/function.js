//Higher Order Function returns

function oddEvenFactory(request) {
    if(request == 'odd') {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    } else if(request == 'even') {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("Wrong Request");
    }
}




/*

// Higher order Function

function multipleCall(func, count) {
    for(let i=0;i<=count;i++){
        func();
    }
}

function greet(){
    console.log(`hello!`);
}

multipleCall(greet,4);

*/