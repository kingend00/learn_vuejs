<template>
  <div>
      <input type="text" class="todo-input" placeholder="What need to be done" v-model="newTodo" @keyup.enter="addTodo">
      <div v-for="(todo,index) in todos" :key="todo.id" class="todo-item">
          <div class="todo-item-left">
              <input type="checkbox" v-model="todo.completed">
              <div v-if="!todo.editing" @dblclick="editTodo(todo)" :class="{completed : todo.completed}" class="todo-item-label">{{todo.title}}</div>
              <input v-else type="text" v-model="todo.title" class="todo-item-edit" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-focus>
          </div>
          <div class="remove-item" @click="removeTodo(index)">
              &times;
          </div>
      </div>
      <div class="extra-container">
          <div>
              <label for="">
                  <input type="checkbox" :checked="!anyRemaining" @change="checkallTodos">Check All
              </label>
          </div>
          <div>{{remaining}} items left</div>
      </div>

      <div class="extra-container">
          <button :class="{active:filter == 'all'}" @click="filter = 'all'">all</button>
          <button :class="{active:filter == 'active'}" @click="filter = 'active'">all</button>
          <button :class="{active:filter == 'completed'}" @click="filter = 'completed'">completed</button>
      </div>
      <div>Clear Completed</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      newTodo: '',
      idForTodo:3,
      beforeEditCache: '',
      filter:'all',
      todos:[
          {
            'id' : 1,
            'title' : 'Finish Vue Screencast',
            'completed' : false,
            'editing' :false,
          },
           {
            'id' : 2,
            'title' : 'Take over World',
            'completed' : false,
            'editing' :false,
          }
      ]
    }
  },
  directives:{
      focus:{
          inserted(el) {
              el.focus()
          }
      }
  },
  computed:{
     remaining(){
         return this.todos.filter(todo => !todo.completed).length
     },
     anyRemaining(){
         return this.remaining != 0
     }  
  },
  methods:{
      addTodo(){
          if(this.newTodo.trim().length == 0){
              return
          };
          this.todos.push({
              id:this.idForTodo,
              title:this.newTodo,
              completed:false,
          })
          this.newTodo=''
          this.idForTodo++
      },
      removeTodo(index){
          this.todos.splice(index,1)
      },
      editTodo(todo){
          todo.editing = true
          this.beforeEditCache = todo.title
          console.log(todo)
      },
      doneEdit(todo){
          if(todo.title.trim() == ''){
              todo.title = this.beforeEditCache
          };
          todo.editing=false
      },
      cancelEdit(todo){
        todo.editing=false;
        
        todo.title = this.beforeEditCache
      },
      checkallTodos(){
          this.todos.forEach((todo) => todo.completed = event.target.checked)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.todo-input{
    width: 100%;
    padding:10px 18px;
    font-size:18px;
    margin-bottom: 16px;

    &:focus{
        outline:0;
    }
} 
.todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.remove-item {
    cursor: pointer;
    margin-left:14px;
    &:hover {
        color:red;
    }
}
.todo-item-left{
    display:flex;
    align-items: center;
}

.todo-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
}

.todo-item-edit {
    font-size: 24px;
    color: #2c3e50;
    margin-left: 12px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    font-family: 'Avenir',Helvetica, Arial, sans-serif;

    &:focus{
        outline:none;
    }
}
.completed {
    text-decoration: line-through;
    color: grey;
}
.extra-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgrey;
    padding-top: 14px;
    margin-bottom: 14px;
}

button {
    forn-size:14px;
    background-color: white;
    appearance: none;

    &:hover {
        background: lightgreen;
    }

    &:focus {
        outline:none;
    }
}

.active {
    background: lightgreen;
}
</style>
