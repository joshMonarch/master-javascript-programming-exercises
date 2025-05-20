let currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(shoeList) {
    let result = []
    let blackColored = []
    let name = ""

    for (const item of shoeList){
      name = item['name']

      for (const shoe of item['shoes']){

        if(shoe['name'].includes('black')){
          blackColored = Object.values(shoe)
        }
      }
      result.push([name,...blackColored])
    }
    if (blackColored.length == 0){ return [] }
    return result
    
}

console.log(renderInventory(currentInventory));
