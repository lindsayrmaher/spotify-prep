// Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢


//we want a count of all the ways we can make the correct change rather than the mininum number of coins needed to make the right change.



const changePossibilities = (amount, denominations) => {

  let permutations = new Array(amount + 1).fill(0)

  permutations[0] = 1

  denominations.forEach(denom => {
    for (let i = denom; i <= amount; i++) {
      let remainder = i - denom
      permutations[i] += permutations[remainder]
    }
  })

  return permutations[amount]


}
