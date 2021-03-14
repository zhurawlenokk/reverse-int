module.exports = function reverse (n) {
    n = Math.abs(n);
       
    let array = n.toString().split('');

    let num = Number(array.reverse().join(''));
    
    return num
    
}





