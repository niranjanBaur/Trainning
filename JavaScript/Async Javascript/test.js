// // console.log("start")

// // setTimeout(()=>{
// //     console.log("Callback");
// // },4890)

// // console.log("End");

var x = 10;
console.log("Global 1 "+x);

function test()
{
    x = 20;
    console.log("Test 1 "+x);

    if (x > 10) {
        let x = 30; // 
        console.log("Test if 1 "+x);
    }

    console.log("Test 2 "+x);
}
test();
console.log("Global 2 "+x); // according to me it will print 10 ,but its print 20 . why??

