// The dataset.json will be used in the solutions.

// hundredThousandairs()
// Return an array with accounts from bankBalances that are greater than 100000 without using for or while loop

// datasetWithRoundedDollar()

// DO NOT MUTATE DATA.

// Return a new dataset where each bank object is a new object. amount and state values will be transferred to the new object. This new object is different, you will add one new key of rounded

// rounded value is amount rounded to the nearest dollar

// Example:

//   {
//     "amount": "134758.44",
//     "state": "HI",
//     "rounded": 134758
//   }
// sumOfBankBalances()
// Return the sum of all values held at amount for each bank object

// sumOfInterests()
// From each of the following states: Wisconsin Illinois Wyoming Ohio Georgia Delaware take each amount and add 18.9% interest to it rounded to the nearest cent and then sum it all up into one value saved to sumOfInterests

// higherStateSums()
// Aggregate the sum of each state into one hash table Return the sum of all states with totals greater than 1,000,000

const dataset = require("./dataset.json");

const { bankBalances } = dataset;

function hundredThousandairs() {
  return bankBalances.filter((account) => account.amount > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map(({ amount, ...rest }) => ({
    amount,
    rounded: Math.round(amount),
    ...rest,
  }));
}

function sumOfBankBalances() {
  const sum = bankBalances.reduce(
    (totalAmount, { amount }) => totalAmount + parseFloat(amount),
    0
  );
  return Math.round(sum * 100) / 100;
}

function sumOfInterests() {
  const PERCENTAGE_INTEREST = 18.9;
  const states = ["WI", "IL", "WY", "OH", "GA", "DE"];

  const filteredAccounts = bankBalances.filter((account) =>
    states.includes(account.state)
  );

  // Adds 18.9% interest to it & rounds to the nearest cents
  const totalInterests = filteredAccounts.reduce((total, { amount }) => {
    const interestAmount = parseFloat((amount * PERCENTAGE_INTEREST) / 100);
    const newAmount = parseFloat(interestAmount + amount).toFixed(2);

    return total + parseFloat(newAmount);
  }, 0);
  return parseFloat(totalInterests.toFixed(2));
}

function higherStateSums() {
  const THRESOLD_AMOUNT_PER_STATE = 1000000;
  const states = [];
  bankBalances.forEach((account) => {
    const { state } = account;
    const amount = parseFloat(account.amount);
    if (!states[state]) {
      states[state] = amount;
    } else {
      states[state] += amount;
    }
  });

  const filteredStateAmounts = Object.values(states).filter(
    (amount) => amount > THRESOLD_AMOUNT_PER_STATE
  );

  return filteredStateAmounts.reduce(
    (finalSum, amount) => finalSum + amount,
    0
  );
}

module.exports = {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
