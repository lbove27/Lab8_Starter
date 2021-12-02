// unit.test.js

const { TestWatcher } = require('@jest/core');
const { unregisterCustomQueryHandler } = require('puppeteer');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber True Tests
const number1 = "(650) 759-1565";
const number2 = "650-298-9593";
test('checks phone number with parentheses', () => {
    expect(functions.isPhoneNumber(number1)).toBe(true);
});
test('checks phone number with dashes', () => {
    expect(functions.isPhoneNumber(number1)).toBe(true);
});

//isPhoneNumber False Tests
const number3 = "123456789";
const number4 = "2";
test('phone number with correct number of digits but incorrect format', () => {
    expect(functions.isPhoneNumber(number3)).toBe(false);
});
test('phone number that is only 1 digit', () => {
    expect(functions.isPhoneNumber(number4)).toBe(false);
});

//isEmail True Tests
const email1 = "lbove@ucsd.edu";
const email2 = "lelandbve27@gmail.com";
test('email test for UCSD email', () => {
    expect(functions.isEmail(email1)).toBe(true);
});
test('email test for personal email', () => {
    expect(functions.isEmail(email2)).toBe(true);
});


//isEmail False Tests
const email3 = "ndgnlvkndlsknvlakn";
const email4 = "leland@2727gmail.comcom";
test('email test for random string', () => {
    expect(functions.isEmail(email3)).toBe(false);
});
test('email test for incorrect email format', () => {
    expect(functions.isEmail(email4)).toBe(false);
});

//isStrongPassword True Tests
const password1 = "QwErTy123";
const password2 = "password";
test('strong password test 1', () => {
    expect(functions.isStrongPassword(password1)).toBe(true);
});
test('strong password test 2', () => {
    expect(functions.isStrongPassword(password2)).toBe(true);
});

//isStrongPassword False Tests
const password3 = "!@#$%^&*()";
const password4 = "a";
test('strong password test 3 - cannot have symbols', () => {
    expect(functions.isStrongPassword(password3)).toBe(false);
});
test('strong password test 4 - too short', () => {
    expect(functions.isStrongPassword(password4)).toBe(false);
});

//isDate True Tests
const date1 = "11/14/2021";
const date2 = "1/1/1111";
test('date test with two digit day and month', () => {
    expect(functions.isDate(date1)).toBe(true);
});
test('date test with one digit day and month', () => {
    expect(functions.isDate(date2)).toBe(true);
});

//isDate False Tests
const date3 = "124/234/20005";
const date4 = "//"; 
test('date test with too many digits for day, month, and year', () => {
    expect(functions.isDate(date3)).toBe(false);
});
test('date test with no digits', () => {
    expect(functions.isDate(date4)).toBe(false);
});

//isHexColor True Tests
const color1 = "FFCC00";
const color2 = "FC0";
test('6 digit hex color', () => {
    expect(functions.isHexColor(color1)).toBe(true);
});
test('3 digit hex color', () => {
    expect(functions.isHexColor(color2)).toBe(true);
});

//isHexColor False Tests
const color3 = "ABCDEGF";
const color4 = "ZCV";
test('Too many digits for a hex color', () => {
    expect(functions.isHexColor(color3)).toBe(false);
});
test('Uses letters not allowed for a hex color', () => {
    expect(functions.isHexColor(color4)).toBe(false);
});