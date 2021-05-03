function Counter() {
  // Private
  let count = 0;

  this.increment = function() {
    // Accessible through closure
    count++;
    console.log(count);
  }

  this.decrement = function() {
    // Accessible through closure
    if (count > 0) {
      count--;
      console.log(count);
    }
  }
}

const counter1 = new Counter();

// Count is not accessible directly
console.log(counter1.count);

counter1.increment();
counter1.decrement();
counter1.increment();

const counter2 = new Counter();

// Count is not accessible directly
console.log(counter2.count);

counter2.increment();
counter2.increment();
counter2.decrement();