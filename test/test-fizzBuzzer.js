'use strict';

//import chai
const expect = require('chai').expect;

//import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer') ;

//unit test for fizzBuzzer
describe('fizzBuzzer',function(){
  //testing the normal case
  it('Should return fizz for numbers divisible by 3 but not 5',function(){

    const testForFizz = [
      {a: 3, expected : 'fizz'},
      {a: 6,expected : 'fizz'},
      {a: 9,expected : 'fizz'},
      {a: 12,expected : 'fizz'},
      {a: 3333,expected : 'fizz'},
      {a: 303,expected : 'fizz'},
      {a: 303030303,expected : 'fizz'},
    ];

    testForFizz.forEach(function(input){ 
      const answer = fizzBuzzer(input.a); 
      expect(answer).to.equal(input.expected); 
    });
  });
  fizzBuzzer;

  //unit test for fizzBuzzer
  describe('fizzBuzzer',function(){
  //testing the normal case
    it('Should return buzz for numbers divisible by 5 but not 3',function(){

      const testForBuzz = [
        {a: 5, expected : 'buzz'},
        {a: 10,expected : 'buzz'},
        {a: 20,expected : 'buzz'},
        {a: 2500000,expected : 'buzz'},
        {a: 35000000,expected : 'buzz'},
        {a: 40.00,expected : 'buzz'},
        {a: 30303030305,expected : 'buzz'},
      ];

      testForBuzz.forEach(function(input){ 
        const answer = fizzBuzzer(input.a); 
        expect(answer).to.equal(input.expected); 
      });
    });  
  });

  //unit test for fizzBuzzer
  describe('fizzBuzzer',function(){
  //testing the normal case
    it('Should return fizzbuzz for numbers divisible by 3 and 5 ',function(){

      const testForFizzBuzz = [
        {a: 15, expected : 'fizz-buzz'},
        {a: 45,expected : 'fizz-buzz'},
        {a: 300000000,expected : 'fizz-buzz'},    
        //{a: 45.45,expected : 'fizz-buzz'},
        {a: 3030303030,expected : 'fizz-buzz'},
      ];

      testForFizzBuzz.forEach(function(input){ 
        const answer = fizzBuzzer(input.a); 
        expect(answer).to.equal(input.expected); 
      });
    });  
  });


  //unit test for fizzBuzzer
  describe('fizzBuzzer',function(){
  //testing the bad Input case
    it('Should throw error for bad inputs ',function(){
      const testForFizzBuzzBadInputs = [
        {a: ''},
        {a: 'string'},
        {a: false},    
        {a: true},
        {a: '.'},
      ];
      testForFizzBuzzBadInputs.forEach(function(input){ 
        expect(function(){
          fizzBuzzer(input.a);
        }).to.throw(Error);
      });
    });
  });  
});