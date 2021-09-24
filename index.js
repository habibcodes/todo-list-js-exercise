
// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,
    
    // prints out the provided task's details
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // marks the provided task as completed
    completeTask: function() {
      this.complete = true;
    },
  };

  return task;
};


// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// DRIVER CODE BELOW
newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

task1.logTaskState(task1); // Clean Cat Litter has not been completed
task1.completeTask(task1);
task1.logTaskState(task1); // Clean Cat Litter has been completed

// for now, let's just make sure we see our tasks
console.log(tasks);

