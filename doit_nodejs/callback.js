
const order = (coffee, callback) => {
    console.log(`${coffee} 주문접수`);
    setTimeout(() => {
        callback(coffee);
    }, 3000);
}

const display = (result) => {
    console.log(`${result} 완료!`); 

}

exports.order = order;
exports.display =  display
;