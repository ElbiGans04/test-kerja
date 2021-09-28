// // MAZE 1

const count = 15;
// const listSuku = dapatkanKumpulanSuku(count, 1, 4);
// const listSuku2 = dapatkanKumpulanSuku(count, 3, 4);
// for (let i = 1; i <= count; i++) {
//   let column = ``;
//   let special = listSuku.includes(i);
//   let special2 = listSuku2.includes(i);
//   for (let j = 1; j <= count; j++) {
//     if (i % 2 === 0) {
//       if (j === 1 || j === count) column += `@`;
//       else column += ` `;
//     } else {
//       if ((special && j === 2) || (special2 && j === count - 1)) column += " ";
//       else column += `@`;
//     }
//   }

//   // console.log(column, i)
// }

function dapatkanKumpulanSuku(limit, a, b) {
  let list = [];
  let i = 1;
  let stop = false;
  while (stop === false) {
    let result = a + (i++ - 1) * b;
    if (b < 0) {
      if (result >= limit) list.push(result);
      else stop = true;
    } else {
      if (result <= limit) list.push(result);
      else stop = true;
    }

    if (i === 100) stop = true;
  }

  return list;
}

function removeDuplicateArray(array) {
  return array.filter((arrayItem, index) => array.indexOf(arrayItem) == index);
}

// Panjang list suku harus genap
const sukuList = dapatkanKumpulanSuku(count, 1, 2);
const sukuTengah =
  sukuList.length % 2 === 0 ? sukuList[sukuList.length / 2] : null;
const sukuTengah2 =
  sukuList.length % 2 === 0 ? sukuList[sukuList.length / 2 - 1] : null;
// Nilai
const sukuValue = [
  ...dapatkanKumpulanSuku(sukuTengah, 3, 2),
  ...dapatkanKumpulanSuku(1, sukuTengah2, -2),
];
const sukuValue2 = [
  ...dapatkanKumpulanSuku(sukuTengah, count, -2),
  ...dapatkanKumpulanSuku(count, sukuTengah, 2),
];

// Simulasi
// Misal index 1,3,5
// Mencari bagian sukuValue.slice(0, sukuList.indexOf(5) + 1)
// Jika
// Suku Ganjil
// [
//   1,  3,  5,  7,
//   9, 11, 13, 15
// ]


// pecah lagi
// UNTUK GANJIL SUDAH BENAR
const index = 1;
const genap = index % 2 === 0 ? true : false;
const fil = removeDuplicateArray(
  sukuValue.filter((value) => sukuValue[index] >= value).sort((a, b) => a - b)
);
const fil2 = removeDuplicateArray(
  sukuValue2.filter((value) => sukuValue2[index] <= value).sort((a, b) => a - b)
);
// Nilai batas kiri terbesar
const filLeft = Math.max(...fil);
// Nilai batas kanan terkecil
const filRight = Math.min(...fil2);

// // Check isi
// let column = ``;
// for (let i = 1; i <= count; i++) {
//   if (fil.includes(i) || fil2.includes(i)) column += `@`;
//   else {
//     // Ganjil
//     if (i > filLeft && i < filRight) column += `@`;
//     else column += " ";
//     // Genap
//     // if((i > filLeft && i < filRight)) column += ` `
//     // else column += ' '
//   }
// }
// console.log(column)


// check genap
// DIKIT LAGI 
for (let index = 1; index <= count; index++) {
  const genap = index % 2 === 0 ? true : false;
  let tambah = sukuTengah < index ? (index + 1) : (index - 1);
  let index2 = genap ? sukuList.indexOf(tambah) : sukuList.indexOf(index);
  const fil = removeDuplicateArray(
    sukuValue
      .filter((value) => sukuValue[index2] >= value)
      .sort((a, b) => a - b)
  );
  const fil2 = removeDuplicateArray(
    sukuValue2
      .filter((value) => sukuValue2[index2] <= value)
      .sort((a, b) => a - b)
  );

  // Nilai batas kiri terbesar
  const filLeft = Math.max(...fil);
  // Nilai batas kanan terkecil
  const filRight = Math.min(...fil2);
  let column = ``;
  for (let i = 1; i <= count; i++) {
    if (fil.includes(i) || fil2.includes(i)) column += `@`;
    else {
      if (!genap) {
        // Ganjil
        if (i > filLeft && i < filRight) column += `@`;
        else column += " ";
      } else {
        // Genap
        if((i > filLeft && i < filRight)) column += ` `
        else column += ' '
      }
    }
  }
  console.log(column)
  // console.log(index, fil, fil2)
}