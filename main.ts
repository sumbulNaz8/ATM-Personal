#! /usr/bin/env 
import inquirer from "inquirer"
let myBalance = 30000
const myPin = 786;  //Dollars


const pinAns = await inquirer.prompt(
    [
        {
            name:"pin",
            type:"number",
            message:"Please enter your secret pin to proceed",
            
        }
    ]
);

if(pinAns.pin == myPin){
console.log("Login was successful!");


    const operations = await inquirer.prompt(
        [
            {
                name:"opr",
                type:"list",
                message:"Please select the operation you want to perform:",
                choices:[
                          "withdraw Amount",
                           "fast cash",
                           "check balance"
                ],
            },
           
        ]);
if (operations.opr === "withdraw Amount"){
        console.log("Current Balance:" +myBalance)
        let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message:"enter your amount",
                type:"number"
            
                
            }
        ]

    )
   
if(amountAns.amount > myBalance){
            console.log("Insufficient funds. Withdrawal failed");
        }
else{
            myBalance -= amountAns.amount
            console.log("Your Remaining balance is : " + myBalance)
        } 
  
}         
else if( operations.opr === "fast cash"){
          console.log("Current Balance:" +myBalance)
          let fastCashAmount = await inquirer.prompt(
            [
                {
                    name:"fastCash",
                    message:"Select the amount you want to withdraw",
                    type:"list",
                    choices:["10000",
                             "20000",
                             "30000"
                    ]
                }
            ]
        );
if (fastCashAmount.fastCash <= myBalance){
            myBalance -= fastCashAmount.fastCash
            console.log("Your Remaining Balance is:" + myBalance)
}else{
            console.log(`Insuficient Balance`);
        }
      
}else if(operations.opr === "check balance"){
        console.log("Current Balance:" +myBalance);
    }
    }
else{
    console.log("Incorrect pin Number")
    }

  