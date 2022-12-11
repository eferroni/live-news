# Live News APP with Next.js 13

## Media Stack API:

What? It's a free, simple rest api for live news and blog articles

- Signup for free on https://mediastack.com/
- On Dashboard menu, copy your Access Key to your environment variable local file

## Stepzen:

What? middleware that transform a rest api to graphql
We will connect to StepZen to access the media stack api

- Create an account on https://stepzen.com/

### Installing:

- Install StepZen globally on your machine: npm install -g stepzen
- Log in with your StepZen account: `bash stepzen login -a username`
- Enter your Admin Key, copy and paste from the StepZen Getting Started page

### Implementing

On Account menu:

- Copy your API Key to your environment variable local file

## How to Start your app:

Run the following commands in teo terminals:
`stepzen start`
`npm run dev`

## Environment variables:

.env sample file:

```
MEDIASTACK_API_KEY=key_value
STEPZEN_API_KEY=key_value
```
