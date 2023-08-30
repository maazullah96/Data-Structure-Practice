// const calculate
const data = [
  {
    id: 1,
    name: 'Poland',
    language: 'Polish',
    capital: 'Warsaw'
  },
  {
    id: 2,
    name: 'Bulgaria',
    language: 'Bulgarian',
    capital: 'Sofia'
  },
  {
    id: 3,
    name: 'Hungary',
    language: 'Hungarian',
    capital: 'Budapest'
  },
  {
    id: 4,
    name: 'Moldova',
    language: 'Moldovan',
    capital: 'Chișinău'
  },
  {
    id: 5,
    name: 'Austria',
    language: 'German',
    capital: 'Vienna'
  },
  {
    id: 6,
    name: 'Lithuania',
    language: 'Lithuanian',
    capital: 'Vilnius'
  }
]

const calculateRange = (data, rowsPerPage) => {
  console.log(rowsPerPage)
  const num = Math.ceil(data.length / rowsPerPage)
  const items = []
  for (let i = 1; i < num; i++) {
    items.push(i)
  }
  return items
}

const sliceData = (data, page, rowsPerPage) => {
  data
  page
  rowsPerPage
  console.log((page - 1) * rowsPerPage)
  console.log(page * rowsPerPage)
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
}

const rowsPerPage = 2
// calculateRange(data, rowsPerPage)

const da = sliceData(data, 2, rowsPerPage)
da
console.log(da)
// const calculateRange = (data, rowsPerPage) => {
//   const range = []
//   const num = Math.ceil(data.length / rowsPerPage)
//   num
//   let i = 1
//   for (let i = 1; i <= num; i++) {
//     range.push(i)
//   }
//   range
//   return range
// }

// const d = calculateRange(data, 3)
// d

// const sliceData = (data, page, rowsPerPage) => {
//   return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
// }

// const dd = sliceData(data, 1, 3)
// dd
