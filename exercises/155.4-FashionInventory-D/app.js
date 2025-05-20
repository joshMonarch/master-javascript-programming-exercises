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

function getLaceNameDataForShoes(inventory) {
  let result = []
  let nameWords = []
  let targetWordIndex = 0

  for (const item of inventory){
    for (const shoe of item['shoes']){
      let name = shoe['name']
  
      if (name.includes('lace')){
        nameWords = name.split(" ")
        targetWordIndex = nameWords.findIndex(word => word.includes('lace'))
      
      } else { continue }
      result.push({'nameWords': nameWords, 'targetWordIndex': targetWordIndex})
    }
  }
  return result
}

console.log(getLaceNameDataForShoes(currentInventory));