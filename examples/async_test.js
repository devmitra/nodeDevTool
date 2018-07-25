
// Actual Async method
let callBack = {
    get() {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve({data: "x"});
            }, 5000)
        });
    }
};

// Wrapper Call
async function asyncCallback() {
    console.log(`Starting ${new Date()}`);
    let data = await callBack.get();
    console.log(`Ending ${new Date()}`);
    console.dir(data);
    return data;
}

asyncCallback().then(data => {
    console.log("Received Data");
    console.dir(data);
});
