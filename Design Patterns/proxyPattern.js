const person = {
  name: 'Naim Islam',
  age: 22,
  nationality: 'Bangladeshi',
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`This property doesn't seem to exist on the target object`);
    } else {
      console.log(`The value of ${prop} is ${Reflect.get(obj[prop])}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      return console.log(`Sorry, you can only pass numeric values for age`);
    }

    if ((prop === 'name' && value.length < 2) || typeof value !== 'string') {
      return console.log(`You need to provide a valid name`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      Reflect.set(obj, prop, value);
      return value;
    }
  },
});

personProxy.nonExistentProperty;
personProxy.name = 'Onoy';
personProxy.age = 25;
