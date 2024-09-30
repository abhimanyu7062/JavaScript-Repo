# JavaScript-Repo
run the code  --  node folderName/FileName.js
# Interview Question

 # 01- Event Loop
  it enables asynchronous programming and ensures non-blocking execution.
 the event loop is a constantly running process that monitors both the callback queue and call stack

# 02- working of event loop  - call Stack , Web API,  Callback Queue , Event Loop
The Call Stack runs all synchronous code.
Web APIs handle asynchronous operations (timers, events, etc.) and move callbacks into appropriate queues once they finish.
The Event Loop ensures that the Microtask Queue is processed before the Task Queue, and tasks are moved to the call stack when it's empty.

# 03 Temporal Dead Zone
the period of time in JavaScript where a variable is declared using let or const, but it can't be accessed yet.it will throw a ReferenceError.

# 04 Lexical Scope
 Variables in inner functions can access variables in outer functions because of the structure of the code, not because of runtime behavior.

 # 05 Closure
 A closure is formed when an inner function "remembers" and continues to access variables from its outer function, even after the outer function has finished executing.

# 06 Callback
A callback is a function that is passisng function as a argument and it is executed after the completiotion of outer function. 
Callback oftenly used in asyncronous programing .


