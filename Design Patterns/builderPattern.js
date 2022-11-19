// Address class
class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

// User class
class User {
  constructor(name) {
    this.name = name;
  }
}

// User builder class
class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  // Set age
  setAge(age) {
    this.user.age = age;
    return this;
  }

  // Set phone
  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  // Set address
  setAddress(address) {
    this.user.address = address;
    return this;
  }

  // User object
  build() {
    return this.user;
  }
}

const user = new UserBuilder('Naim').setAge(21).setPhone('0190000000').build();
console.log(user);

// User class
class User2 {
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user2 = new User2('Naim', {
  age: 20,
  phone: '01900000000',
  address: new Address('3623', 'Cumilla'),
});
console.log(user2);
