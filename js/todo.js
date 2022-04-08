class Todo {
    async showTodoList(userId) {
        document.getElementsByClassName("spinner-border")[0].style.display = "block"
        try {
            this.todos = await api.get(URL_TODOS + "?userId=" + userId);            
            this.showTodos();
        } catch(e) {
            showMessageError(e);
        } finally {
            document.getElementsByClassName("spinner-border")[0].style.display = "none";
        }
    }
    showTodos() {
        var str = "";
        this.todos.forEach(todo => {
            str += "<tr";
            if(todo.completed) {
                //coloro di verde perché la cosa da fare è stata completata
                str += " style='background-color:green; color:white'"
            }
            str += ">"
            str += "<td>" + todo.title + "</td>";
            str += "</tr>";
        });
        document.getElementById("tableTodo").innerHTML = str;
        document.getElementById("todoListDiv").style.display = "block";
    }
}