import './example.test.js';
import {add} from './utils.js'; 
import {subtract} from './utils.js'; 
import {multiply} from'./utils.js'; 
import {divide} from './utils.js'; 

const test = QUnit.test;

test('should take in 1 and 1 and return 2', (expect) =>{
    const expected = 2; 
    const actual = add(1,1); 
    expect.equal(actual,expected); 
});

test('should take in 1 and 1 and return 0', (expect) =>{
    const expected = 0; 
    const actual = subtract(1,1); 
    expect.equal(actual,expected); 
});

test('should take in 2 and 4 and return 8', (expect) =>{
    const expected = 8; 
    const actual = multiply(2,4); 
    expect.equal(actual,expected); 
});

test('should take in 4 and 2 and return 2', (expect) =>{
    const expected = 2; 
    const actual = divide(4,2); 
    expect.equal(actual,expected); 
});