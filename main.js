document.getElementById("bottom").addEventListener("click", function () { 
    event.preventDefault(); 
    let amount = parseFloat(document.getElementById("amount").value) 
    let years = parseFloat(document.getElementById("years").value )
    let rate1 =parseFloat( document.getElementById("interest").value) 
   
    let amount1 = amount; 
    for (let i = 0; i < years; i++) { 
      const lastAmount = amount1 *rate1 / 100; 
      amount1 += lastAmount; 
    } 
   
    return console.log( amount1); 
  })
