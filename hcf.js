const hcf =(num1,num2)=>{
    console.log(num1);
    console.log(num2);

    if(num2> num1 ){
        [num1,num2] = [ num2,num1];
    }
    console.log(num1);
    console.log(num2);
    hfcs=[]
    for( let i =0 ; i< num2.length;i++){

            console.log(num1 % i)
            console.log(num2 % i);
        // if (num1 % i == 0 && num2 % i == 0) {
        //   hfcs.push(i);
        // }
    }
    hfcs

}


let num1 = 24
let num2 = 12

hcf(num1,num2)