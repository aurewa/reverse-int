module.exports = function reverse (n) {
    var strN = Math.abs(n).toString();
    var result = '';

    for(var i = strN.length -1; i >=0 ; i--){
        result += strN[i];
    }
    
    return Number(result);
}
