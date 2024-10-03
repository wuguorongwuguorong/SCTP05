// need a way to store our data
let ratings = [
    {
        "id": 1,  // unique identifier for the record
        "name": "Stephen Chow",
        "store":"Jurong Point",
        "rating": "average",
        "done": false
    },
    {
        "id": 2,
        "name": "Andy Lau",
        "store":"North Point",
        "rating":"good",
        "done": false
    },
    {
        "id": 3,
        "name": "Jackie Cheung",
        "store":"Compass One",
        "rating":"excellent",
        "done": true
    }

]
// DOMContentLoaded is an event that fires
// when the HTML is loaded completely
window.addEventListener("DOMContentLoaded", function(){
    // render all the tasks in the database
    renderTasks();

    // Creating Task Section
    // select the button
    document.querySelector("#createSubmit").addEventListener("click", function(){
        let newCustName = document.querySelector("#CustName").value;
        let newstore = document.querySelector(".store").value;
        let rating = document.querySelector(".rating:checked").value;
        

        // the addTask function is in data.js
        addTask(ratings, newCustName, newstore, rating);

        // re-render all the tasks
        renderTasks();

    });

})

// renderTasks is to update the ul#tasks with 
// all the tasks
function renderTasks() {

    let submittedList = document.querySelector("#ratings");

    // empty the task list of all the <li> inside it
    submittedList.innerHTML = ""; // remove all the children inside

    for (let k of ratings) {
      
           
        // METHOD ONE: Using createElement and appendChild to add the checkbox and the button
        // let liElement = document.createElement("li");
        // liElement.innerHTML = `
        //     ${t.name} (${t.urgency}) 
        // `


        // Using JS to write <input type="checkbox"/>
        // let checkbox = document.createElement("input");
        // checkbox.type = "checkbox";
        // checkbox.checked = t.done;  // if task is done, checkbox will be checked

        // liElement.appendChild(checkbox);

        // // Use JS to write <button>Edit</button>
        // let button = document.createElement("button");
        // button.innerHTML = "Edit";
        // button.addEventListener("click", function(){
        //     alert("Button clicked");
        // })

        // // Add the newly created button to the <li>
        // liElement.appendChild(button);

        
        // METHOD TWO: Using createElement to create the <li> but using innerHTML to set the <li>
        let liElement = document.createElement("li");
        liElement.innerHTML = `
            Name:${k.name}  Outlet:${k.store}  Rating:${k.rating}
            <input type="checkbox" class="checkbox"/>
            <button class="edit">Edit</button> 
            <button class="delete">Delete</button>
        `

        // we can call querySelector on any DOM object. If we do so, then the querySelector
        // will only search children within the object
        let checkbox = liElement.querySelector(".checkbox");
        checkbox.checked = k.done;
        checkbox.addEventListener("click", function(){
            updateTaskDone(ratings, k.id);
            renderTasks();
        })

        // for edit
        let editButton = liElement.querySelector(".edit");
        // start the process of editing a task
        editButton.addEventListener("click", function(){
            let newCustName = prompt("Enter the new customer name: ", k.name);
            let newOutlet = prompt("Enter Outlet:", k.store);
            let newRating = prompt("Enter the new rating: ", k.rating);
            let newDone = prompt("Is the task done (y/n)");

            let isDone = false;
            if (newDone.toLowerCase() == 'y' ) {
                isDone = true;
            }

            updateTask(ratings, k.id, newCustName, newOutlet, newRating, isDone);
            renderTasks(); // redraw all the tasks, along with any changes

        });

        // for delete 
        // search within the liElement's children to find the element with the class ".delete"
        let deleteButton = liElement.querySelector(".delete");
        deleteButton.addEventListener("click", function(){
            let reallyDelete = confirm("Are you sure you want to delete?");
            if (reallyDelete) {
                deleteTask(ratings, k.id);
                renderTasks();
            }
        })

        submittedList.appendChild(liElement);
    }
}