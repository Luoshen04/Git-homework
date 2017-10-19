Array.prototype.myforEach=function (fn,content) {
    if(typeof fn !=='function'){
        throw new TypeError(fn+'is not a function');
    }else{
        for(var i=0;i<this.length;i++){
            if(Object.prototype.hasOwnProperty.call(this,i)){
                fn.call(content,this[i],i,this);
            }
        }

    }
}
var arr1=[3,5,6,8];
arr1.myforEach(console.log);