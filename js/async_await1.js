console.log('start');

function resolveAfter2Sconds(x) {
  return new Promise( resolve => {
    setTimeout( () => {
      resolve(x)
    }, 2000)
  })
}

// resolveAfter2Sconds(10)
//   .then(value => {
//     console.log(value)
//   })

async function add1(x) {
  const result = await resolveAfter2Sconds(x);
  console.log(result)
  return result;
}

console.log(add1(10))

console.log('end');