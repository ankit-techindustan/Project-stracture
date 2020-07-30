function curriedFunction (fn) {
    return function (a)  {
        return function(b)  {
            return function(c)  {
                return function(d) {
                    return fn(a,b,c,d)
                }
            }
        }
    }
    }
    const add = curry(function(a, b, c) {
        return a + b + c;
      });
      
      var mul = curry(function(a, b, c) {
        return a * b * c;
      });
    // const add = (a, b, c, d) => a + b + c + d;
    
    // console.log(curriedFunction(1),(2),(3),(4))
    // const curriedAdd = curriedFunction(add);
    
    
    const add = (a, b, c, d) => a + b + c + d;


    // const curriedAdd = curriedFunction(add);


    console.log(add(1)); // output
    // curriedAdd(1, 2); // output
    // curriedAdd(1, 2, 3); // output
    // curriedAdd(1, 2, 3, 4); // output
    
    
    // const curredSubtract = curriedFunction((a, b) => a - b)
    
    // curredSubtract(5, 10);

    // function curry(fn) {
    //     return function(a) {
    //       return function(b) {
    //         return function(c) {
    //           return fn(a, b, c);
    //         }
    //       }
    //     }
    //   }
      
    //   var sum = curry(function(a, b, c) {
    //     return a + b + c;
    //   });
      
    //   var mul = curry(function(a, b, c) {
    //     return a * b * c;
    //   });
      
     
      
    //   console.log( sum(5)(6)(7))
    //   console.log(mul(5)(6)(7))