/*Add to the prototype of all functions the method
defer(ms), that runs the function after ms milliseconds.
After you do it, such code should work:
*/

Function.prototype.defer = function(delay){
    setTimeout(this, delay);
}

function f() {
   /* alert("Hello!");*/
    return "Maharishi";
}

f.defer(1000); // shows "Hello!" after 1 second

describe("Defer function", function(){
    it("calling f() should return Maharishi", function(){
        assert.equal(f(), "Mahaishi")
    });
});