# Live News APP with Next.js 13

## Media Stack API:

What? It's a free, simple rest api for live news and blog articles

- Signup for free on https://mediastack.com/
- On Dashboard menu, copy your Access Key to your environment variable local file

## Stepzen:

What? It's a middleware that transform a rest api to graphql

We will connect to StepZen to access the media stack api

- Create an account on https://stepzen.com/

### Installing:

- Install StepZen globally on your machine: `npm install -g stepzen`
- Log in with your StepZen account: `stepzen login -a username`
- Enter your Admin Key, copy and paste from the StepZen Getting Started page

### Implementing

On a new Terminal, run the following commands:

- Open a new terminal and initialize StepZen on your project:

```bash
stepzen init
```

- Import the rest api url:

```bash
stepzen import curl "http://api.mediastack.com/v1/news?access_key=key-goes-here"
```

On Stepzen Account menu:

- Copy your API Key to your environment variable local file

## How to Start your app:

Run the following commands in two terminals:

```bash
stepzen start
```

```bash
npm run dev
```

## Environment variables:

.env.local sample file:

```
MEDIASTACK_API_KEY=key_value
STEPZEN_API_KEY=key_value
```
