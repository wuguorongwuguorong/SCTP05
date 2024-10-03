
function addTask(submittedList, newCustName, ratings, store) {
    // update my tasks array
    let newRatings = {
       // use a random number for the ID for the purpose of testing
       "id": Math.floor((Math.random() * 100000) + 9999),
       "store": store,
       "name": newCustName,
       "rating": ratings,
       
   }

   // add the new task to the array
   submittedList.push(newRatings);
}

function updateTask(submittedList, rateId, newCustName, newstore, newRating , newIsDone) {

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
   let index = submittedList.findIndex(function(rate){
       return rate.id == rateId; // if the annoymous function returns true,
                                // then the index of task is the result
   })
   
   // 2. do the replacement
   // make sure index is no null, undefined or 0 etc.
   if (index) {
    submittedList[index] = {
           "id": rateId,
           "name": newCustName,
           "store": newstore,
           "rating": newRating,
           "done": newIsDone
       }
   }
}

function deleteTask(ratings, ratingIdToDelete) {

   // 1. find the index of the task that I want to delete
   let indexToDelete = ratings.findIndex(function(k){
       return k.id == ratingIdToDelete;
   })

   // 2. delete the task from the array
   ratings.splice(indexToDelete, 1);
}

function updateTaskDone(ratings, ratingId) {
   let index = ratings.findIndex(function(t){
       return k.id == ratingId
   });

   // if the the task is already done, check it as not done
   // if (tasks[index].done) {
   //     tasks[index].done = false;
   // } else {
   //     tasks[index].done = true;
   // }

   // or we can just use the ! operator to invert
   ratings[index].done = !ratings[index].done;
}