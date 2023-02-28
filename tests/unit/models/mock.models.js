const products = [{
  "id": 1,
  "name": "Martelo de Thor"
},
{
  "id": 2,
  "name": "Traje de encolhimento"
},
{
  "id": 3,
  "name": "Escudo do Capitão América"
}
];


const deletedProducts = [
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  },
  null
]

const deleteResult = {
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 0,
  "info": "",
  "serverStatus": 2,
  "warningStatus": 0
}

const product = {
  "id": 1,
  "name": "Martelo de Thor"
}

module.exports = {
  products,
  product,
  deletedProducts,
  deleteResult,
}