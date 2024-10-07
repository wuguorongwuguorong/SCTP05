let BIN_ID="66ff5732ad19ca34f8b26050";
let BASE_API_URL="https://api.jsonbin.io/v3";

async function loadData() {
    let response = await axios.get(`${BASE_API_URL}/b/${BIN_ID}/latest`);
    console.log("response",response)
    console.log("response.data.record",response.data.record)
    return response.data.record;  
}

// first parameter: array of tasks to save
async function saveData(ratings) {
    // if following notes, you can ignore the third argument (our bin is public
    // so need to set the signature)
    let response = await axios.put(`${BASE_API_URL}/b/${BIN_ID}`, ratings);
    return response.data;
}

function addTask(submittedList, newCustName, newstore, newRate) {
    // update my tasks array
    let newRatings = {
       // use a random number for the ID for the purpose of testing
       "id": Math.floor((Math.random() * 100000) + 9999),
       "name": newCustName,
       "store": newstore,
       "rating": newRate
       
   }

   // add the new task to the array
   submittedList.push(newRatings);
   
}

function updateTask(submittedList, rateId, newCustName, newstore, newRating){

   // using findIndex
   let index = submittedList.findIndex(function(rate){
       return rate.id == rateId; // if the annoymous function returns true,
                                // then the index of task is the result
   })
   
   // 2. do the replacement
   // make sure index is no null, undefined or 0 etc.
   if (index !==-1) {
    submittedList[index] = {
           "id": rateId,
           "name": newCustName,
           "store": newstore,
           "rating": newRating
       }
   }
   saveData(ratings);
}

function deleteTask(ratings, ratingIdToDelete) {

   // 1. find the index of the task that I want to delete
   let indexToDelete = ratings.findIndex(function(r){
       return r.id == ratingIdToDelete;
   })

   // 2. delete the task from the array
   ratings.splice(indexToDelete, 1);
   saveData(ratings);
}

