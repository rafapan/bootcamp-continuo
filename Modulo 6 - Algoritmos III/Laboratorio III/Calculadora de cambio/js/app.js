const cashRegister = [
    200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];
  // console.log(cashRegister);
  // Primero calculamos la diferencia para saber cuánto debemos devolver
  
  let getResult = (a, b) => {
    let c = b - a;
    return c;
  };
  
  
  // let result = getResult(payment, amount);

  // Voy a obtener los billetes o monedas en lo que
  let getRemain = (result, cashRegister) => {
    // let cashRemain = {};
  
    // for (let i = 0; i < cashRegister.length; i++) {
    //   if (parseInt(result / cashRegister[i]) > 0) {
    //     let numberbill = parseInt(result / cashRegister[i]);
    //     let money = cashRegister[i];
    //     cashRemain[money] = numberbill;
    //     result = result % cashRegister[i];
    //     result = result.toFixed(2);
    //     console.log(cashRegister[i])
    //   }
    // }
    // console.log(cashRemain)
    // return cashRemain;
  
      let cashRemain = [];
        for (let i = 0; i < cashRegister.length; i++) {
          if (parseInt(result / cashRegister[i]) > 0) {
            let newObject = {};
            let numberbill = parseInt(result / cashRegister[i]);
            newObject[numberbill] = cashRegister[i];
            cashRemain.push(newObject);

            result = result % cashRegister[i];
            result = result.toFixed(2);
          }
        }
      return cashRemain;
  };
  
  // console.log(getRemain(result, cashRegister));
  
  // let listCoins = getRemain(result, cashRegister);
  
  let printRemain = (arrayRemain) => {
    let remain = "<h2>Cantidad a devolver</h2><ul>";
    for (objeto of arrayRemain) {
        for (propiedad in objeto) {
            remain = remain + "<li>" + propiedad + " ";
            if (objeto[propiedad] >= 5 && propiedad > 1) {
              remain = remain + "billetes de ";
            } else if (objeto[propiedad] >= 5 && propiedad == 1) {
              remain = remain + "billete de ";
            } else if (objeto[propiedad] < 5 && propiedad > 1) {
              remain = remain + "monedas de ";
            } else {
              remain = remain + "moneda de ";
            }
        
            remain = remain + objeto[propiedad] + " €";
          }
    }
    
    remain = remain + "</ul>"
    document.getElementById("remain").innerHTML = remain;
  }
  
  
  // printRemain(listCoins);
  
  let calculate = () => {
    let amount = document.getElementById("payment").value;
    let payment = document.getElementById("total").value;
    
    let result = getResult(payment, amount);
    let listCoins = getRemain(result, cashRegister);
    printRemain(listCoins);
  }
  
  document.getElementById("btn-calculate").addEventListener('click', calculate)