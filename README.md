# React + TypeScript + Vite

You can access this app directly in https://fastidious-mooncake-84d52e.netlify.app/

## How to run this project?

- Clone this repo
- Install the dependencies: `yarn install`
- run `yarn dev`

## Storybook
This project is configured with storybook. You can run storybook by executing: `yarn storybook`

## How build this app?
You can build this app by running: `yarn build`.

A `dist` directory is created with the build assets.

## Notes

- This project takes advantage of React Query Cache, so queries fetch the data directly from cache (if data is available).
- When a user clicks in an artist result, artist data is stored in react-query cache, so the artist detail page gets the data directly from the cache.
- This project is configured with Netlify. Every time a change is push to master branch, a new release is generated.
