function printHello(){
  console.log("Hello")
}

function printWorld(){
  console.log("World!")
}

function callAPI_1(){
  setTimeout(() => {
    console.log("Response 1")
  }, 1000)
}

function callAPI_2(){
  setTimeout(() => {
    console.log("Response 2")
  }, 2000)
}


function callAPI_3(){
  setTimeout(() => {
    console.log("Response 3")
  }, 3000)
}

function main(){
  callAPI_2();
  callAPI_3();
  callAPI_1();
  printHello();
  printWorld();
}


main();
