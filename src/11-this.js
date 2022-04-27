function alert() {
    console.log(this.age + " years old");
  }
  
  const myObj = {
    age: 30,
    alert: alert
  };
  
  myObj.alert();  