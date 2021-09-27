const count = 15;

for (let i = 0; i < count; i++) {
    let column = ``;
    for (let j=0; j < count; j++) {
        column += `@`;
    }
    console.log(column)
}