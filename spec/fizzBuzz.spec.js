const subject = new FizzBUzz

describe('FizzBuzz', () => {
  it("is expected to return a number if none of the game rules apply"), () => {
    expect(subject.check(2)).toEqual(2)
  }

  it("is expected to return Fizz if number is divisable by 3"), () => {
    expect(subject.check(3)).toEqual("fizz")
  }

  it("is expected to return Buzz if number is divisable by 5"), () => {
    expect(subject.check(5)).toEqual("buzz")
  }

  it("is expected to return FizzBuzz if number is divisable by 15"), () => {
    expect(subject.check(15)).toEqual("fizzbuzz")
  }
});

