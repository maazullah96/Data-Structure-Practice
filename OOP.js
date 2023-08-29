const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`)
  }
}

console.log(person)
person.bio()
person.introduceSelf()
// intro()

const array1 = [5, 12, 50, 130, 44]

const isLargeNumber = (element) => element > 45

console.log(array1.findLastIndex(isLargeNumber))
// Expected output: 3
// Index of element with value: 130
