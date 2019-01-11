
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      testRocket1 = new Rocket();
      expect(testRocket1.name).toBeDefined();
      expect(testRocket1.colour).toBeDefined();
      expect(testRocket1.flying).toEqual(false);
    });

    test("it should set the rocket's name if provided", () => {
      testRocket2 = new Rocket();
      testRocket2.name = "Rocket Blasta";
      expect(testRocket2.name).toEqual("Rocket Blasta");

      testRocket3 = new Rocket();
      testRocket3.name = " ";
      expect(testRocket3.name).toEqual(" ");

      testRocket4 = new Rocket();
      testRocket4.name = (937501);
      expect(testRocket4.name).toEqual(937501);
    });
  });

  describe('liftOff', () => {
    test('should set flying to truthy value and return a truthy value', () => {
      testRocket5 = new Rocket();
      testRocket5.flying = false;
      expect(testRocket5.liftOff()).toEqual(true);
      expect(testRocket5.flying).toEqual(true);
    });

    test('should return false if flying already equals true', () => {
      testRocket6 = new Rocket();
      testRocket6.flying = true;
      expect(testRocket6.liftOff()).toEqual(false);
      expect(testRocket6.flying).toEqual(true);
    });
  });

  describe('land', () => {
    test('if flying is false, return false', () => {
      testRocket7 = new Rocket();
      testRocket7.flying = false;
      expect(testRocket7.land()).toEqual(false);
      expect(testRocket7.flying).toEqual(false);
    });

    test('if flying is true, set flying to false and return true', () => {
      testRocket8 = new Rocket();
      testRocket8.flying = true;
      expect(testRocket8.land()).toEqual(true);
      expect(testRocket8.flying).toEqual(false);
    });
  });

  describe('status', () => {
    test('if flying is true, return string with rocket.name is flying', () => {
      testRocket9 = new Rocket();
      testRocket9.name = "Raquet";
      testRocket9.flying = true;
      expect(testRocket9.status()).toEqual(`Rocket ${testRocket9.name} is flying through the sky!`);
    });

    test('if flying is false, return message rocket is ready for liftoff', () => {
      testRocket10 = new Rocket();
      testRocket10.name = "Avocado";
      testRocket10.flying = false;
      expect(testRocket10.status()).toEqual(`Rocket ${testRocket10.name} is ready for liftoff!`);
    });
  });

  describe('sendCodedSignal', () => {
    test("if messageCode is undefined, push string 'boop' into signalInfo array", () => {
      testRocket11 = new Rocket();
      expect(testRocket11.sendCodedSignal()).toEqual('boop');
    });

    test("if messageCode is less than 10, return 'beep'", () => {
      testRocket12 = new Rocket();
      expect(testRocket12.sendCodedSignal(6)).toEqual('beep');
    });

    test("if messageCode is less than 10 and flying is true, return 'beep beep'", () => {
      testRocket13 = new Rocket();
      testRocket13.flying = true;
      expect(testRocket13.sendCodedSignal(7.5)).toEqual('beep beep');
    });

    test("if messageCode is greater than or equal to 10 and flying is true, return message 'boop boop boop'", () => {
      testRocket14 = new Rocket();
      testRocket14.liftOff
      expect(testRocket14.sendCodedSignal(13)).toEqual('boop boop boop');
      expect(testRocket14.sendCodedSignal(10)).toEqual('boop boop boop');
    });

    test("if messageCode is greater than or equal to 10 and flying is false, return message 'boop beep beep'", () => {
      testRocket15 = new Rocket();
      expect(testRocket15.sendCodedSignal(10)).toEqual('boop beep beep');
    });
  });

});
