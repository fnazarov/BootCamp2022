const num = [1,2,3,4];

function doublee(x){
    console.log(x**2);
}
num.forEach(doublee);

const parityList = num.map(function(x){
    if (x%2===0)
        return "even"
        return "odd"
})


const checkList = num.map(function(x){
return x%2==0;
    
})

const arrowList = num.map((n) => n%2 ===0? 'even': 'odd');