beforeEach(() => {
  console.log("1. beforeEach");
});

test("", () => {
  console.log("2. test");
});

describe("My Component Test", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });

  beforeEach(() => {
    console.log("2. beforeEach");
  });

  test("two plus two is four", () => {
    expect(2 + 2).toBe(4);
  });

  test("object assignment", () => {
    // Arrange
    const expectedData = { one: 1 };
    // Act
    expectedData["two"] = 2;

    // Assert
    const outputData = {
      one: 1,
      two: 2
    };

    expect(expectedData).toEqual(outputData);
  });

  test("null", () => {
    const n = null;

    expect(n).toBeNull();
    expect(n).not.toBeTruthy();
  });
});

describe("Mocking", () => {
  test("Should iterate and call callback function", () => {
    const forEach = (items, cb) => {
      for (let index = 0; index < items.length; index++) {
        cb(items[index]);
      }
    };

    const mockCb = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCb);

    expect(mockCb.mock.calls.length).toBe(2);
    expect(mockCb.mock.calls[0][0]).toBe(0);
    expect(mockCb.mock.calls[1][0]).toBe(1);

    expect(mockCb.mock.results[0].value).toBe(42);

    const myMock = jest.fn();
    myMock.mockReturnValue("20");

    console.log(myMock(), myMock(), myMock(), myMock());
  });
});
