test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be approximately 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(8);

    const expectedYens = 8 * 146.261682;

    expect(yens).toBeCloseTo(expectedYens,2); 
})

test("1 yen should be approximately 0.005559 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(8000);

    const expectedPounds = 8000 * 0.005559;

    expect(pounds).toBeCloseTo(expectedPounds, 2);
})