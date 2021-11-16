import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//declaratie variabelen
// var firstname = "collin";
// var lastname = "van der Vorst";

// for( var i = 0; i < 10; i++)
// {
//   console.log((i));
// }

// console.log((i));

//ES6 const vs let
// let firstname = "collin";
// firstname = "krollin"
// console.log(firstname);

// for(let index = 0; index <10; index++)
// {
//   console.log(index);
// }

// if(true)
// {
//   var variabel = true; 
// }

// console.log(index);

//ES5 concatenation
// var firstname = "collin"
// var lastname = "van der vorst";
// console.log(firstname + " "+ lastname);

//ES6 concatenation
// let firstname = "collin";
// let lastname = "van der vorst";
// let fullname = `${firstname} ${lastname}`;
// console.log(fullname);

//ES5 
// var person ={
//   Firstname: "collin",
//   Name: "van der vorst",
//   sayFullname: function(){
//     console.log(this.Firstname + " " + this.Name);
//   }
// };

// console.log(person.Firstname);
// console.log(person.Name);
// person.sayFullname();

//ES6
// let person = {
//   firstname: "collin",
//   name: "vand er vorst",
//   sayfullname(){
//     console.log(`${this.firstname} ${this.name}`);
//   }
// };

//ES5
// var person={
//   firstname: "collin",
//   name: "vnder vorst",
//   sayfullname: function(){
//     console.log(this.firstname + " " + this.name);
//   }
// };

// console.log(person.firstname);
// console.log(person.name);
// person.sayfullname();

// var getfullname= person.sayfullname();
// getfullname();

//Es6
// let person={
//   firstname: "collin",
//   name: "vnder vorst",
//   sayfullname(){
//     console.log(this.firstname + " " + this.name);
//   }
// };

// console.log(person.firstname);
// console.log(person.name);
// person.sayfullname();

// let getfullname= person.sayfullname.bind(person);
// getfullname();

//ES5
// var person={
//   firstname: "collin",
//   name: "vnder vorst",
//   sayfullnameAftersecond: function(){
//     var self = this;
//     setTimeout(function(){
//       console.log(self.firstname + " " + self.name)
//     }, 2000);
    
//   }
// };

// person.sayfullnameAftersecond();

//ES6
const person={
  firstname: "collin",
  name: "vnder vorst",
  sayfullnameAftersecond(){
    
    setTimeout(() => {
      console.log(this.firstname + " " + this.name)
    }, 2000);
  }
};
person.sayfullnameAftersecond();