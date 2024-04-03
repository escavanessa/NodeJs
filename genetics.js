
const p1 = {
    t1: 'X',
    t2: 'X',
}

const p2 = {
    t1: 'Y',
    t2: 'Y'
}

const punnett = {
    s1: p1.t1 + p2.t1,
    s2: p1.t2 + p2.t1,
    s3: p1.t1 + p2.t2,
    s4: p1.t2 + p2.t2
}

console.log(punnett)
Object.values(punnett).reduce(function (accumulator, traits) {
    let count = accumulator[traits] ?? 0;
    accumulator[traits] = count += 25;
    return accumulator
}, {});

// function findPercent(arr) {
//     let i = 0;
//     let j = arr.length - 1;

//     while (left < right) {
//         if(arr[i] !== arr[j]) {
//             sum = 25;
//             j--
//         } else {
//             sum = 50
//         }
//         if(arr[i] !== arr[j]) {
             
//         }
//     }
// }

// for (i = 0; i < genomes.length; i++) {
    // if(genomes[0] === genomes[1] && genomes[2] && genomes[3]) {
    //     console.log(genomes)
    //     console.log(genomes[0], ':', 100)
    // } else {
    //     console.log(genomes)
    //     console.log(genomes[0], 'not a perfect match')
    // }
// }

// if(genomes[0] !== genomes[1,2,3]) {
//     console.log(25)
// } else if (genomes[0] === genomes[1,2,3]) {
//     console.log(100)
// } else if (genomes[0] === genomes[1,2]) {
//     console.log(50)
// } else if (genomes[0] == genomes[1] && genomes[2] && genomes[3]) {
//     console.log(75)
// } 



// if(genomes[1] !== genomes[0,2,3]) {
//     console.log(25)
// } 
// if(genomes[2] !== genomes[0,1,3]) {
//     console.log(25)
// }
// if(genomes[3] !== genomes[0,1,2]) {
//     console.log(25)
// }


// console.log(genomes)
// console.log(punnett)