# Spec info

## Spec script structure

```js
describe('hooks', () => {
  before(() => {
    // runs before all tests in this block
  });

  after(() => {
    // runs after all tests in this block
  });

  beforeEach(() => {
    // runs before each test in this block
  });

  afterEach(() => {
    // runs after each test in this block
  });

  // test case
  it('test case name', () => {
    // content
  });
});
```