const App = {
data(){
  return {
    name:'test 2',
    count: 1,
    containerClasses:'red',
    newTodo: '',
    todoList:[],
  };

},
mounted() {
  setInterval( () => {
  // console.log(this);
  // this.count++;
  },1000)
  },
  methods:
  {
    addOne(){
      this.count++
    },
    addTodo(){
      this.t
    }
  }
}
Vue.createApp(App).mount('#app')