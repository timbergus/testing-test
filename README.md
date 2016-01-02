# Testing Playground

What we have here is a playground to use test and test coverage tools to see what we can do.

Right now we are using Tape and Nock for testing, and NYC for test coverage.

## Available tests

### Function testing

In the add example we are exporting a function and testing it.
In the multiply example we are exporting partial functions and testing them. Easy pie!

### Class testing

In the subtract example we are testing a class, testing it methods.

### React component testing

In the component example, we are testing a react component. We are using the [react testing utils](https://facebook.github.io/react/docs/test-utils.html) to render the component and the just checking the result with what we spect. The info for this example is from this [Egg Head tutorial](https://egghead.io/series/react-testing-cookbook).

## Bibliography

* [Tape](https://github.com/substack/tape)
* [Nock](https://github.com/pgte/nock)
* [Coverage with NYC](https://github.com/bcoe/nyc)
