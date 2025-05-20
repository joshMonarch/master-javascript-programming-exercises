let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    let result = []
    let avgInfo = []
    let avg = 0
    
    inventory.forEach(item => {

      avgInfo.push([Object.keys(item)[0], Object.values(item)[0]])
      let sum = 0
      let shoes = Object.values(item)[1]
      
      shoes.forEach(shoe => {
        
        let price = Object.entries(shoe)[1][1]
        sum += price
        
      })

      avg = sum/shoes.length
      avgInfo.push(["averagePrice", avg])

      result.push(Object.fromEntries(avgInfo))

    });
    return result
  
}

console.log(renderAverageCostPerDesigner(currentInventory));
