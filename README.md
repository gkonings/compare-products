# compare-products

This project is an assignment to compare the properties of several products. To install and run:

```
yarn install
yarn start
```

The product was built using create-react-app.

## State management

For state management I chose not to use redux. The main reason is that redux is not really needed and everything redux can do, you can do with React Context ... which is included in React.

## Responsiveness

Responsiveness is a bit hard to do with a desktop-first design, so it's not really possible to have a mobile-friendly layout. This is more of a design challenge than a coding challenge.
I implemented the table with a html table, it's made for it. With a more complex design with a totally different mobile view css-grid would have been a good option.

## Testing

Currently I'm testing a lot in Enzyme, but I'm slowly trying to move away from that. With Enzyme it's really easy to test implementation details (internal state, props being passed, etc.) which won't help you when you're changing the implementation of your component, for example, when you rewrite a class component to a functional component.
Lately I'm learning to test more with react-testing-library which focusses more on intergration testing and tries to simulate user-behaviour more. I've included a test to show how that works.
