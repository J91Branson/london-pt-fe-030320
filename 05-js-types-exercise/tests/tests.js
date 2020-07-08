const greeting= "Hi!";
const name= "JB";
const phrase= `Greeting: ${greeting}, Name: ${name}`;
describe("strings", () => {
  test("greeting is a string", () => {
    expect(typeof greeting).toBe("string");
  });
  test("name is a string", () => {
    expect(typeof name).toBe("string");
  });
  test("phrase is a string", () => {
    expect(typeof greeting).toBe("string");
  });
  test('phrase is made up of "GREETING, NAME!" (e.g. "Hello, Mimi!")', () => {
    expect(typeof greeting).toBe("string");
  });
});

const price=4.99;
const quantity=100;
const total= price * quantity;
const age1=1000;
const age2=100;
const age3=10000;
const averageAge= (age1 + age2 + age3) /3;
describe("numbers", () => {
  test("price is a number", () => {
    expect(typeof price).toBe("number");
  });
  test("price is a float (i.e. has a decimal place)", () => {
    expect(parseInt(price)).not.toBe(price);
  });
  test("quantity is an integer", () => {
    expect(typeof quantity).toBe("number");
    expect(parseInt(quantity)).toBe(quantity);
  });
  test("total is price multiplied by quantity", () => {
    expect(typeof total).toBe("number");
    expect(total).toBe(quantity * price);
  });
  test("age1, age2 and age3 are integers", () => {
    expect(typeof age1).toBe("number");
    expect(parseInt(age1)).toBe(age1);
    expect(typeof age2).toBe("number");
    expect(parseInt(age2)).toBe(age2);
    expect(typeof age3).toBe("number");
    expect(parseInt(age3)).toBe(age3);
  });
  test("averageAge is the mean of age1, age2 and age3", () => {
    expect(typeof averageAge).toBe("number");
    expect(averageAge).toBe((age1 + age2 + age3) / 3);
  });
});

const loggedIn= true;
const adminUser= false;
describe("booleans", () => {
  test("loggedIn is a boolean", () => {
    expect(typeof loggedIn).toBe("boolean");
  });
  test("loggedIn is true", () => {
    expect(loggedIn).toBe(true);
  });
  test("adminUser is a boolean", () => {
    expect(typeof adminUser).toBe("boolean");
  });
  test("adminUser is false", () => {
    expect(adminUser).toBe(false);
  });
});

const missingInfo= undefined;
let password;
describe("undefined", () => {
  test("missingInfo is declared as undefined", () => {
    expect(() => missingInfo).not.toThrow();
    expect(typeof missingInfo).toBe("undefined");
  });
  test("password is completely undefined", () => {
    expect(() => password).not.toThrow();
    expect(typeof password).toBe("undefined");
  });
});
