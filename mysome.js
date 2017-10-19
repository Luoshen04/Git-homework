if (typeof Array.prototype.mysome != "function") {
    Array.prototype.mysome = function (fn, context) {
        var passed = false;
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                if (passed === true) break;
                passed = !!fn.call(context, this[k], k, this);
            }
        }
        return passed;
    };
}
var scores = [5, 8, 3, 10];
var current = 7;

function higherThanCurrent(score) {
    //有比标准高的分数
    return score > current;
}

if (scores.mysome(higherThanCurrent)) {
    console.log("大于");
}