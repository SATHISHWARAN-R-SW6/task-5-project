//1.  For the given JSON iterate over all for loops (for, for in, for of, forEach)

{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
}

//Here's how you can iterate over the object using different types of loops:

// 1. Using a `for...in` loop (for objects):

const jsonData = {
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
};

for (const key in jsonData) {
  if (jsonData.hasOwnProperty(key)) {
    const value = jsonData[key];
    console.log(`Key: ${key}, Value: ${value}`);
  }
}


// 2. Using a traditional `for` loop (for arrays):

const jsonArray = ["value1", "value2", "value3"];

for (let i = 0; i < jsonArray.length; i++) {
  const value = jsonArray[i];
  console.log(`Index: ${i}, Value: ${value}`);
}


// 3.Using a `for...of` loop (for arrays and other iterable objects):

const jsonArray = ["value1", "value2", "value3"];

for (const value of jsonArray) {
  console.log(`Value: ${value}`);
}


// 4.const jsonArray = ["value1", "value2", "value3"];

const jsonArray = ["value1", "value2", "value3"];

jsonArray.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});


