// import the function sum from the app.js file
const { fromEuroToDollar } = require('./app.js');

//Euro To Dollar
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
    
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolars, then 3.5 euros should be = (3.5 * 1.2)
})

//same as Euro to dollar but Dollar to Yen
test("One Dollar should be 1.206 yen", function(){
    
    const { fromDollarToYen } = require('./app.js')

    
    const dollars = fromDollarToYen(1)

    
    const expected = (106.58333333333334); 
    
    
     expect(fromDollarToYen(1)).toBe(106.58333333333334); 
})

//Yen to Pounds
test("One euro should be 1.206 dollars", function(){
    
    const { fromYenToPound } = require('./app.js')

    const yens = fromYenToPound(1)

   
    const expected = 0.006254886630179828; 
    
    
     expect(fromYenToPound(1)).toBe(0.006254886630179828);
})