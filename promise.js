let myPromise= new Promise(function(resolve,reject){
    console.log("dwnlding it will take 5 secs");
    setTimeout(function(){
        console.log(" avg speed :20kbps");
        resolve();
    },5000)
});


myPromise.then(function(){
    console.log("ding dong");
});


