let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function renderInventory(inventory) {
  let result = []
  let shoeInfo = []
  let designer = ""

  inventory.forEach(item => {
    
    let values = Object.values(item)
    designer = values[0]

    values[1].forEach(shoe => {

      shoeInfo = Object.values(shoe)
      result.push([designer, ...shoeInfo])

    })
  });
  
  return result

}

console.log(renderInventory(currentInventory))

/*  [
      [designer name, shoe name, price],
      [designer name, shoe name, price],
      ...
    ] 
*/
