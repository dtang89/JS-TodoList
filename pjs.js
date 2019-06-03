var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0)
            console.log('Your todo list is empty');
        else {
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true){
                    console.log('(x)', this.todos[i].todoText)
                }
                else {
                    console.log('( )', this.todos[i].todoText)
                }
            }
        }
    },

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
    });
        this.displayTodos();
    },

    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },

    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },

    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        for (var i = 0; i < totalTodos; i++){
            if (this.todos[i].completed === true){
                completedTodos++;
            }
        }

        //Case 1: if everything true, make everything false
        if(completedTodos === totalTodos){
            for (var i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        }
        else{
            for (var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }

        this.displayTodos();
    }
};


var displayTodosButton = document.getElementById('displayTodoButton');

displayTodosButton.addEventListener('click', function(){
    todoList.displayTodos();
});

var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();

});



// var test = {
//     todoText: '',
//     completed: false//Boolean true or false
//
// }
// todoList.displayTodos();
// todoList.addTodo('first');
// todoList.addTodo('second');
// todoList.toggleCompleted(0);

// console.log(todoList.addTodo('boolean testing'))
// console.log(todoList.toggleCompleted(0))
// console.log(todoList.changeTodo(0, 'newtest'))

//console.log(todoList.changeTodo(0, 'first'))
// console.log(todoList.deleteTodo(0));

