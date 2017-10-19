if (typeof Array.prototype.myfilter != "function") {
    Array.prototype.myfilter = function (fn, context) {
        var arr = [];
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                fn.call(context, this[k], k, this) && arr.push(this[k]);
            }
        }else{
            throw new TypeError(fn+'is not a function')
        }
        return arr;
    };
}
var arr3=[3,2,5,6,7];
var a=arr3.myfilter(console.log);
console.log(a);