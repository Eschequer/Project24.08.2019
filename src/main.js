import Vue from 'vue';
import App from './App.vue';


const vm = new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app');


let names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

let uniq = names
  .map((name) => {
    return {
      count: 1,
      name: name
    }
  });

let reduce = uniq.reduce((a, b) => {
  a[b.name] = (a[b.name] || 0) + b.count
  return a
}, {})

console.log(uniq);
console.log(reduce);


