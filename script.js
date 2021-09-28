// MAZE 1

const count = 15;
const listSuku = dapatkanKumpulanSuku(count, 1, 4);
const listSuku2 = dapatkanKumpulanSuku(count,3, 4);

for (let i = 1; i <= count; i++) {
    let column = ``;
    let special = listSuku.includes(i);
    let special2 = listSuku2.includes(i);
    for (let j=1; j <= count; j++) {
        if ((i % 2) === 0) {
            if (j === 1 || j === count) column += `@`;
            else column += ` `;
        } else {
            if ((special && j === 2) || (special2 && j === (count - 1))) column += ' ';
            else column += `@`;
        }
    }

    console.log(column, i)
}

function dapatkanKumpulanSuku(limit, a, b) {
  let list = [];
  let i = 1;
  let stop = false;
  while (stop === false) {
    let result = a + (i++ - 1) * b;
    if (result <= limit ) list.push(result);
    else stop = true;
  }

  return list;
}