function newPromiseCallBack(resolve,reject){
  resolve();
}


let newPromise = new Promise(newPromiseCallBack)

console.log(newPromise)