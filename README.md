# React Tac Toe

**React Tac Toe** is the result of a personal experiment I conducted when investigating how to write React tests in such a way that they pass even if I completely change the way the game's state is managed. That is, the _exact same_ suite of tests should pass even if the underlying implementation of the game is changed. After all, since the external behaviour of the app does not change, should the tests?

Read more about **[The What, How, and Why of Nicely Testing React Components](https://auroratide.com/posts/nicely-testing-react-components)** on my personal website!

## A Tour

All the cool stuff is in the [ReactTacToe component](/src/ReactTacToe)! You will see that the Tic Tac Toe game is implemented with three different state management paradigms:

* **React Hooks** - Standard stateful fields on a component
* **MobX Objects** - Object-oriented approach using observables
* **A Reducer** - A pure function that returns new state upon actions being dispatched

Yet, all three of these implementations are tested using the same suite of tests in [ReactTacToe.spec.jsx](/src/ReactTacToe/ReactTacToe.spec.jsx).

```js
import * as ReactTacToeImplementations from '.';

describe('ReactTacToe', () => {
  Object.keys(ReactTacToeImplementations).forEach(implementation => {
    describe(`using ${implementation}`, () => {
      // ...
    });
  });
});
```

This is achieved because the tests follow three simple principles:

* Test what the component _does_, not how it _works_
* Write tests from the perspective of the _user_
* Only expose the component's _surface_ in the test

For example:

```jsx
const clickSquare = n => fireEvent.click(wrapper.getByTestId(`tile-${n}`));
const squareMark = n => wrapper.getByTestId(`tile-${n}`).textContent;

it('should populate the first square clicked with an X', () => {
  wrapper = render(<ReactTacToe />);
  expect(squareMark(0)).toEqual('');

  clickSquare(0);
  expect(squareMark(0)).toEqual('X');
});
```

* The component's supposed to put an X where the user clicks, so let's test that, not whether an internal state object is holding the correct value.
* Instead of instance methods in the component, let's think about real user actions. In our case, the thing a user can do is click on a square.
* All the user can click on is a square, and all the user can see is whether there's a mark or not. That's the component's _surface_.

Feel free to explore a bit more (and suggest improvements in the form of pull requests)!

## Common Commands

```
# Start the app
npm start

# Start and watch
npm run start:watch

# Run tests
npm test
```