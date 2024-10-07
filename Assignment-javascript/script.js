// need a way to store our data
let ratings = [];

// DOMContentLoaded is an event that fires
// when the HTML is loaded completely
window.addEventListener("DOMContentLoaded", async function(){
    
    ratings = await loadData();
    console.log(ratings);
    
    // render all the tasks in the database
    renderTasks();

    // Creating Task Section
    // select the button
    document.querySelector("#createSubmit").addEventListener("click", function(){
        let newCustName = document.querySelector("#CustName").value;
        let newstore = document.querySelector(".store:checked").value;
        let rating = document.querySelector(".rating:checked").value;
        
        
        // the addTask function is in data.js
        addTask(ratings, newCustName, newstore, rating);

        // re-render all the tasks
        renderTasks();

        //to clear off text box after successfully added in a new entry
        document.querySelector("#CustName").value = "";

    });
    document.querySelector("#save-button").addEventListener("click", function(){
        
        saveData(ratings);
    })

})

// renderTasks is to update the ul#ratings with 
// all the tasks
    function renderTasks() {
        let submittedList = document.querySelector("#ratings"); // Assuming #ratings is the <ul> or <ol> element
        submittedList.innerHTML = ""; // Clear the list before rendering new items
    
        // Iterate over the ratings array (which is iterable)
        for (let r of ratings) {
            // Using createElement to create the <li> but using innerHTML to set the <li>
            let liElement = document.createElement("li");
            liElement.innerHTML = `
                Name: ${r.name} | Outlet: ${r.store} | Rating: ${r.rating}
                <button class="edit">Edit</button> 
                <button class="delete">Delete</button>
            `;

            // Edit button functionality
            let editButton = liElement.querySelector(".edit");
            editButton.addEventListener("click", function() {
                let newCustName = prompt("Enter the new customer name: ", r.name);
                let newstore = prompt("Enter Outlet:", r.store);
                let newRating = prompt("Enter the new rating: ", r.rating);
    
                updateTask(ratings, r.id, newCustName, newstore, newRating);
                renderTasks(); // redraw all the tasks, along with any changes
            });
    
            // Delete button functionality
            let deleteButton = liElement.querySelector(".delete");
            deleteButton.addEventListener("click", function() {
                let reallyDelete = confirm("Are you sure you want to delete?");
                if (reallyDelete) {
                    deleteTask(ratings, r.id);
                    renderTasks();
                }
            });
    
            // Append the <li> element to the <ul> or <ol>
            submittedList.appendChild(liElement);
        }   
}