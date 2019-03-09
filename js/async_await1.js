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
  const result = await resolveAfter2Sconds(20);
  console.log(result);
  const result2 = await resolveAfter2Sconds(30);
  console.log(result2)
  return x + result + result2;
}

console.log(add1(10).then( value => console.log('add1: ', value)));

console.log('end');