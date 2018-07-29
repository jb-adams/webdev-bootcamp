let obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function(x,y) {
    return x + y;
  }
};

let dogSpace = {
  speak: function() {
    return "WOOF";
  }
}

let catSpace = {
  speak: function() {
    return "MEOW";
  }
}

let comments = {
  data: ["Awesome", "Wow", "Great job"],
  print: function() {
    this.data.forEach(function(e) {
      console.log(e);
    })
  }
}

console.log(obj.add(10,15));
console.log(dogSpace.speak());
console.log(catSpace.speak());

comments.print();
