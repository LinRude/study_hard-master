const memorize = function(fn){
    const cache = {};
    return function(...args){
        const _args = JSON.stringify(args);
        return cache[_args] || (cache[_args] = fn.apply(fn,args))
    }
}
const add = function (a,b){
    console.log('开始缓存');
    return a + b;
}
const adder = memorize(add)
console.log(adder(2,6));
console.log(adder(2,6));
