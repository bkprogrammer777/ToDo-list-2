const addForm = document.querySelector(".add");         // Step 1, create this variable
const list = document.querySelector(".todos");           // Step 3, create this variable so that the next function (Step 4),  can add the result as a new <li> to the <ul>   
const search = document.querySelector(".search input");   // Step 6, create variable for the search feature



const generateTemplate = (todo) =>{                     // Step 4, creating this function so that the new content typed in is added to the todo list

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span><i class="far fa-trash-alt delete"></i></li>`;

    list.innerHTML += html;

};




addForm.addEventListener("submit", e =>{              // Step 2, creating this function
    
    e.preventDefault();
    const todo = addForm.add.value.trim();              // <---- Trim method takes out any spaces before or after that the user puts into the field
    
    if(todo.length){                                    // <---- If statement, boolean. Meaning if nothing is typed, it will return false and will not be added to the ToDo list. This prevents just a blank entry being put in
        generateTemplate(todo);
        addForm.reset();                                // <----- Add this line to clear the form after an entry is typed in
    }
    
});



//DELETE TODOS                                      // Step 5, Deleting the ToDos
list.addEventListener("click", e => {

    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();             
    }

});



//SEARCHING TODOS

const filterTodos = (term) => {   
                                                                        // Step 8, create function
    Array.from(list.children)                                           // Since list.children is an HTML Collection and therefore cannot perform array methods to it.  Therefore, you have to use the "array.from"
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))                  // This is a chain method function 
    .forEach((todo) => todo.classList.add("filtered"));

    Array.from(list.children)                                   
    .filter((todo) => todo.textContent.toLowerCase().includes(term))       
    .forEach((todo) => todo.classList.remove("filtered"));
    
};


search.addEventListener("keyup", () => {            // Step 7, create function
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});