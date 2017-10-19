if(typeof Array.prototype.mymap!='function'){
    Array.prototype.mymap=function (fn,content) {
        var arr=[];
        if(typeof fn !=="function"){
            throw new TypeError(fn+'is not a function')
        }else {
            for(var i=0;i<this.length;i++){
                arr.push(fn.call(content,this[i],i,this))
            }
        }
        return arr;
    }
}
var nums=[34,5546,2423,23,1];
var b=nums.mymap(function (re1,re2,re3) {
    return re1;
});
console.log(b);