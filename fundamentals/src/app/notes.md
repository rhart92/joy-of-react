# API Design

The react developers "produce" an API and us developers "consume" the API. This
is what API teams for companies like Twitter / Notion do. They have a tremendous
amount of control over the experience of using the API.

Similar to these products, React components can be thought of as these closed
spheres that expose an API (or interface) through props that can be consumed by another component or developer.

There is a spectrum of components:

Low Level: Modal, Button, Slider

    - Reusable
    - Lego Bricks

Low-ish Level: SearchIcon Button (which might use button)

Medium Level: LoginForm, UserProfileCard

    - Includes some specific business logic
    - Built up from the lego bricks

Most Tied to our Application: App, AnalyticsDashboard

    - Uses many Lego bricks
    - Deeply tied to this particular application

The point is that when desinging components, we need to be clear on this
spectrum where the component is on this spectrum.

[More info](https://www.youtube.com/watch?v=mVVNJKv9esE)


