# [[Prototypes]] in JS
https://web.compass.lighthouselabs.ca/days/w06d5/activities/479

## Classes and Inheritance

* Classes are like blueprints that we can use to manufacture many objects from. 
* You can extend classes, called inheriting. The child class can inherit state and behavior from a superclass. Instructions for state and behavior. 
* Share behavior
* _Copy_ behavior when working with classes. An object is a copy of the blueprints defined behavior.

## [[Prototypes]]

* In JavaScript there has always been OO, and functional programming abilities. 
* ES6 introduced the `class` keyword, but there aren't classes in JavaScript. 
* Why would JavaScript do this? simulate traditional classical OO. 
* There is no **right** way to do OO in JS.

```
class Cat {

}
let cat = Cat()

class Cat 
end
Cat.new

class Cat {

}
let cat = new Cat()

class Cat {

}

Cat *cat = new Cat();
```

[[Prototype]], `.prototype`, `__proto__`

* every object has a [[Prototype]] which is another object.
* linked objects. objects get linked together though prototypes.

babyWhiteRhyno.__proto__ -> whiteRhyno.__proto__ -> Object.prototype -> null

* If we try to access a property on an object and that object hasn't defined that property, it will pass it along to it's prototype. 

* the prototype chain

What are [[Prototypes]]
They are objects

* object literals
* enumerable properties

**How does property lookup work in JavaScript?**

* if an object has a property then we use that object's property
* otherwise that object check's it's prototype for that property. delegates an action to it's prototype. 

## `new` and functions

* __proto__ vs prototype

* `.prototype` is a property that only exists on **functions**.
* `.prototype` is an object.
* `new` is used to create a new object from a **function**
* Every object has a [[Prototype]] that we can access using the `.__proto__` property, or `Object.getPrototypeOf()`
* When we create a new object using `new Function()` that function's `.prototype` becomes the new objects `[[Prototype]]` (__proto__)

* modifying existing prototypes

---

We didn't get to this:

## `this`

* bind & call

## links

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
* https://www.youtube.com/watch?v=ifGkCN93Fxg
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames