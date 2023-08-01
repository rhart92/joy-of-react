# Prop Drilling

Since we want to lift the state up as high as it needs to be and no higher. But
this becomes a problem when you have lots of components since you end up needing
to pass props through many components that don't actually need that info, but a
nested child component does.

This is _fine_ in some cases but can make your application hard to maintain
eventually.

Something like the the logged in user might be needed all over your application
and could be a pain to pass it as props to every component 😅

# Context

Context is a mechanism for a top-level component to make state available to all
children without prop drilling.

Context has two steps: **Providing** and **Consuming**.

## Providing

We need to use a `provider` to make a particular value available through
context.

