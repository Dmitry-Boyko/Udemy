const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

let scoreDolphins  = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)

const checkWinner = (scoreDolphins, scoreKoalas) => {
    if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`Koalas win ${scoreKoalas} vs ${scoreDolphins}`);
    } else if (scoreKoalas < 2 * scoreDolphins) {
            console.log(`Dolphins win ${scoreDolphins} vs ${scoreKoalas}`);
    } else {
        console.log("No team wins...")
    }
}

checkWinner(scoreKoalas, scoreDolphins);

// Test 2

scoreDolphins  = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)

checkWinner(scoreKoalas, scoreDolphins);
