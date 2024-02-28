//timeout cancellation
//given a fn, args, and timeout in ms, return a cancel function cancelFN.
//you store the timeout in a variable timer and then pass the timer variable
//into the cleartimeout which takes an argument - the timer is the timerid of the thing we want to cancel
//

var cancellable = function(fn, args, t) {
    let timer = setTimeout(() => {
        fn(...args)
    }, t);
    return function() {
        clearTimeout(timer)
    }   
}

//interval cancellation
//given fn, args, and interval time,the returned cancel funciton will be invoked
//after a delay of cenceltimeMS, the return cancel function will be invoked. 
//i dont udnerstand why fn(...args) has to be in the block scope for this to work?

var cancellable = function(fn, args, t) {
    fn(...args);
    let interval = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(interval);
    return cancelFn;
};

//promise time limit
//given an async function and a time, return a new time limited version of the input function
//if fn completes within t, it resolves with result
//if fn excedes t, the time limit function should reject with string "time limit exceeded"
//youll need promise.race
//returns a single promise. this returns the eventual state of the first promise that settles. 
// i dont know what the underscore in the second promise is doing.

var timeLimit = function(fn, t) {
    return async function(...args) {
        return await Promise.race([
            new Promise(resolve => resolve(fn(...args))),
            new Promise((_, reject) => setTimeout(() => reject("Time Limir Exceeded"), t))
        ]);
    };
};