let elementId = '2'

class Todo {
    constructor(title, content, id) {
        this.title = title
        this.content = content
        this.id = id
        this.type = 'working'
    }
}

function setTodo(title, content) {
        const element = new Todo(title, content, elementId)
        elementId++
    
        return element
    }

    export default setTodo