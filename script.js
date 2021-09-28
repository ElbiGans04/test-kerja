// // MAZE 1
const count = 15;
const listSuku = dapatkanKumpulanSuku(count, 1, 4);
const listSuku2 = dapatkanKumpulanSuku(count, 3, 4);
for (let i = 1; i <= count; i++) {
  let column = ``;
  let special = listSuku.includes(i);
  let special2 = listSuku2.includes(i);

  for (let j = 1; j <= count; j++) {
    // Jika baris genap
    if (i % 2 === 0) {
      if (j === 1 || j === count) column += `@`;
      else column += ` `;
    } else {
      if ((special && j === 2) || (special2 && j === count - 1)) column += " ";
      else column += `@`;
    }
  }

  console.log(column)
}


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

// // MAZE 2
// // PERATURAN !!!
// // COUNT HARUS GANJIL
// // Panjang sukuList harus genap
// const sukuList = dapatkanKumpulanSuku(count, 1, 2); // dapatkan kumpulan bilangan ganjil
// const sukuListGenap = (sukuList.length % 2) === 0 ? true : false;
// const sukuTengah = sukuListGenap ? sukuList[sukuList.length / 2] : null;
// const sukuTengah2 = sukuListGenap ? sukuList[sukuList.length / 2 - 1] : null;
// // List Index Khusus
// const sukuValue = [
//   ...dapatkanKumpulanSuku(sukuTengah, 3, 2),
//   ...dapatkanKumpulanSuku(1, sukuTengah2, -2),
// ];
// const sukuValue2 = [
//   ...dapatkanKumpulanSuku(sukuTengah, count, -2),
//   ...dapatkanKumpulanSuku(count, sukuTengah, 2),
// ];

// // looping
// for (let index = 1; index <= count; index++) {
//   const genap = index % 2 === 0 ? true : false;
//   // Nilai untuk baris genap
//   let tambah = sukuTengah < index ? (index + 1) : (index - 1);
//   // Ambil posisi index, genap dan ganjil berbeda penalaran
//   let index2 = genap ? sukuList.indexOf(tambah) : sukuList.indexOf(index);
//   // Ambil List posisi khusus
//   const fil = removeDuplicateArray(
//     sukuValue
//       .filter((value) => sukuValue[index2] >= value)
//       .sort((a, b) => a - b)
//   );
//   const fil2 = removeDuplicateArray(
//     sukuValue2
//       .filter((value) => sukuValue2[index2] <= value)
//       .sort((a, b) => a - b)
//   );
//   // Nilai batas kiri terbesar
//   const filLeft = Math.max(...fil);
//   // Nilai batas kanan terkecil
//   const filRight = Math.min(...fil2);

  
//   let column = ``;
//   for (let i = 1; i <= count; i++) {
//     // Jika i termasuk batasan khusus
//     if (fil.includes(i) || fil2.includes(i)) column += `@`;
//     else {
//       const value = genap ? " " : "@";
//       // Jika i berada diantara filLeft dan filRight
//       if (i > filLeft && i < filRight) column += `${value}`;
//       else column += " ";
//     }
//   }

//   console.log(column)
// }