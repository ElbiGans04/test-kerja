const count = 15;

// //  MAZE 1
// //  dapatkan list baris yang harus diperlakukan secara khusus
// const listSuku = dapatkanKumpulanSuku(count, 1, 4); 
// const listSuku2 = dapatkanKumpulanSuku(count, 3, 4);
// for (let i = 1; i <= count; i++) {
//   let column = ``;

//   for (let j = 1; j <= count; j++) {
//     // Jika baris genap
//     if (i % 2 === 0) {
//       if (j === 1 || j === count) column += `@`;
//       else column += ` `;
//     } else {
//       if ((listSuku.includes(i) && j === 2) || (listSuku2.includes(i) && j === count - 1)) column += " ";
//       else column += `@`;
//     }
//   }

//   console.log(column)
// }


// // MAZE 2
// // [ PERATURAN ] 
// // COUNT HARUS GANJIL
// // Panjang sukuList harus genap
// const sukuList = dapatkanKumpulanSuku(count, 1, 2); // dapatkan kumpulan baris ganjil
// const sukuTengah = sukuList[sukuList.length / 2];
// const sukuTengah2 = sukuList[sukuList.length / 2 - 1];

// // List Index khusus yang harus diisi oleh '@'
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
//   // Check apakah baris genap / ganjil
//   const genap = index % 2 === 0 ? true : false;
//   // [KHUSUS GENAP] Jika index sudah lebih besar dari nilai tengah maka harus mengambil batasan ganjil berikutnya
//   // Jika belum melewati maka mengambil batasan ganjil sebelumnya
//   let tambah = sukuTengah < index ? (index + 1) : (index - 1);
//   // Ambil posisi index terhadap sukuList jika baris genap maka harus menggunakan variabel tambah
//   let index2 = genap ? sukuList.indexOf(tambah) : sukuList.indexOf(index);
//   // Ambil List Index khusus kiri
//   const fil = removeDuplicateArray(
//     sukuValue
//       .filter((value) => sukuValue[index2] >= value)
//       .sort((a, b) => a - b)
//   );
//   // Ambil List Index khusus kanan
//   const fil2 = removeDuplicateArray(
//     sukuValue2
//       .filter((value) => sukuValue2[index2] <= value)
//       .sort((a, b) => a - b)
//   );
//   // Nilai Index khusus kiri terbesar
//   const filLeft = Math.max(...fil);
//   // Nilai Index khusus kanan terkecil
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


// // MAZE 3
// // [ PERATURAN ] 
// // COUNT HARUS GANJIL
// // Panjang sukuList harus genap
// const sukuList = dapatkanKumpulanSuku(count, 1, 2); // dapatkan kumpulan bilangan ganjil
// const sukuTengah = sukuList[sukuList.length / 2];
// const sukuTengah2 = sukuList[sukuList.length / 2 - 1];

// // List Index khusus yang harus diisi oleh '@'
// const sukuValue = [
//   ...dapatkanKumpulanSuku(sukuTengah, 3, 2),
//   ...dapatkanKumpulanSuku(1, sukuTengah2, -2),
// ];
// const sukuValue2 = [
//   ...dapatkanKumpulanSuku(sukuTengah, count, -2),
//   ...new Array(Math.ceil(sukuList.length / 4)).fill(sukuTengah),
//   ...dapatkanKumpulanSuku(count - 2, sukuTengah + 2, 2),
// ];

// // Ambil List Index khusus kanan baris terakhir
// const lastFil = removeDuplicateArray(
//   sukuValue2
//     .filter((value) => sukuValue2[sukuList.indexOf(count)] <= value)
//     .sort((a, b) => a - b)
// );

// // Ambil list Index khusus untuk spasi ' '
// const listSpaceX = dapatkanKumpulanSuku(sukuTengah, sukuList.length, 1);
// const listSpaceY = dapatkanKumpulanSuku(sukuTengah + lastFil.length, sukuTengah, 3);


// // looping
// for (let index = 1; index <= count; index++) {
//   // Check apakah baris genap / ganjil
//   const genap = index % 2 === 0 ? true : false;
//   // [KHUSUS GENAP] Jika index sudah lebih besar dari nilai tengah maka harus mengambil batasan ganjil berikutnya
//   // Jika belum melewati maka mengambil batasan ganjil sebelumnya
//   let tambah = sukuTengah < index ? (index + 1) : (index - 1);
//   // Ambil posisi index terhadap sukuList jika baris genap maka harus menggunakan variabel tambah
//   let index2 = genap ? sukuList.indexOf(tambah) : sukuList.indexOf(index);
//   // Ambil List Index khusus kir
//   const fil = removeDuplicateArray(
//     sukuValue
//       .filter((value) => sukuValue[index2] >= value)
//       .sort((a, b) => a - b)
//   );
//   // Ambil List Index khusus kanan
//   const fil2 = removeDuplicateArray(
//     sukuValue2
//       .filter((value) => sukuValue2[index2] <= value)
//       .sort((a, b) => a - b)
//   );
//   // Nilai Index khusus kiri terbesar
//   const filLeft = Math.max(...fil);
//   // Nilai Index khusus kanan terkecil
//   const filRight = Math.min(...fil2);

  
//   let column = ``;
//   for (let i = 1; i <= count; i++) {
//     // Jika harus keluar
//     if (listSpaceY.includes(index) && listSpaceX.includes(i)) {
//       listSpaceY[listSpaceY.indexOf(index)] = null;
//       listSpaceX[listSpaceX.indexOf(i)] = null;
//       column += ` ` 
//     } else {
//       // Jika i termasuk batasan khusus
//       if (fil.includes(i) || fil2.includes(i)) column += `@`;
//       else {
//         const value = genap ? " " : "@";
//         // Jika i berada diantara filLeft dan filRight
//         if (i > filLeft && i < filRight) column += `${value}`;
//         else column += " ";
//       }
//     }
//   }
    
//   console.log(column)
  
// }

// Maze 4
// [ PERATURAN ] 
// COUNT HARUS GANJIL
const sukuList = dapatkanKumpulanSuku(count, 1, 2); // dapatkan kumpulan bilangan ganjil
const sukuTengah = sukuList[sukuList.length / 2];
const sukuTengah2 = sukuList[sukuList.length / 2 - 1];

// List Index khusus yang harus diisi oleh '@
const sukuValue = [
  3,
  ...dapatkanKumpulanSuku(1, (count - 2), -2),
];
const sukuValue2 = [
  ...new Array(Math.ceil(sukuValue.length / 4)).fill(count),
];

// Lakukan looping untuk menambahkan 
for (let i = 0; i < (sukuValue.length - Math.ceil(sukuValue.length / 4)); i ++) {
  let value = (i % 2) === 0 ? (count - 2) : count;
  sukuValue2.push(value)
};

// SUKU SPECIAL UNTUK BARIS NOMOR 2
const sukuValueSpecial = [
  1,
  ...dapatkanKumpulanSuku(count, 3, 4),
];

for (let index = 1; index <= count; index++) {
  // Check apakah baris genap / ganjil
  const genap = index % 2 === 0 ? true : false;
  // Ambil posisi index terhadap sukuList jika baris genap maka harus menggunakan variabel tambah
  let index2 = genap ? sukuList.indexOf(index - 1) : sukuList.indexOf(index);
  // Ambil List Index khusus kiri
  const fil = removeDuplicateArray(sukuValue
      .filter((value) => sukuValue[index2] >= value)
      .sort((a, b) => a - b)
  );
  // Ambil List Index khusus kanan
  const fil2 = genap ? [count] : removeDuplicateArray(
    sukuValue2
      .filter((value) => sukuValue2[index2] <= value)
      .sort((a, b) => a - b)
  );
  // Kurangi satu Khusus baris genap
  if (genap) fil.pop()
  // Nilai Index khusus kiri terbesar
  const filLeft = Math.max(...fil);
  // Nilai Index khusus kanan terbesar
  const filRight = Math.min(...fil2);

  
  let column = ``;
  for (let i = 1; i <= count; i++) {
    // Jika i termasuk batasan khusus // Index merupakan baris kedua yang special (harus diperlakukan secara khusus)
    if ((fil.includes(i) || fil2.includes(i)) || 
      index === (Math.floor(sukuList.length / 4)) && sukuValueSpecial.includes(i)
    ) column += `@`;
    else {
      const value = genap ? " " : "@";
      // Jika i berada diantara filLeft dan filRight
      if (i > filLeft && i < filRight) column += `${value}`;
      else column += " ";
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