function calculateDepositAmount() { 
      const initialAmount =parseInt (prompt("Enter the initial amount: ")); 
       const durationInYears = parseInt(prompt("Enter the duration in years: ")); 
       const annualInterestRate = parseInt(prompt("Enter the annual interest rate in %: ")); 
     
       let depositAmount = initialAmount; 
       for (let i = 0; i < durationInYears; i++) { 
       const interestAmount = depositAmount * annualInterestRate / 100; 
         depositAmount += interestAmount; 
       } 
     
      console.log( depositAmount); 
     } 
     calculateDepositAmount()