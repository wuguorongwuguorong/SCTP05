function addTask(submittedList, newCustName, rating) {
    // update my tasks array
    let newRating = {
       // use a random number for the ID for the purpose of testing
       "id": Math.floor((Math.random() * 100000) + 9999),
       "name": newCustName,
       "rating": rating
   }

   // add the new task to the array
   submittedList.push(newRating);
}

function updateTask(submittedList, ratingId, newCustName,newRating , newIsDone) {

   // 1. find the index
   // let index = null;
   // for (let i =0; i < taskList.length; i++) {
   //     let currentTask = taskList[i];
     
   //     if (currentTask.id == taskId) {
   //         index = i;
   //         break;
   //     }
   // }

   // using findIndex
   let index = submittedList.findIndex(function(ratings){
       return ratings.id == ratingId; // if the annoymous function returns true,
                                // then the index of task is the result
   })
   
   // 2. do the replacement
   // make sure index is no null, undefined or 0 etc.
   if (index) {
    submittedList[index] = {
           "id": ratingId,
           "name": newCustName,
           "rating": newRating,
           "done": newIsDone
       }
   }
}

function deleteTask(ratings, ratingIdToDelete) {

   // 1. find the index of the task that I want to delete
   let indexToDelete = tasks.findIndex(function(t){
       return t.id == taskIdToDelete;
   })

   // 2. delete the task from the array
   tasks.splice(indexToDelete, 1);
}

function updateTaskDone(tasks, taskId) {
   let index = tasks.findIndex(function(t){
       return t.id == taskId
   });

   // if the the task is already done, check it as not done
   // if (tasks[index].done) {
   //     tasks[index].done = false;
   // } else {
   //     tasks[index].done = true;
   // }

   // or we can just use the ! operator to invert
   tasks[index].done = !tasks[index].done;
}