This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, 
clone this repository and install modules: 

npm i 
pnpm i

then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If the database in dropdown will load slowly because of Vercel issues as I deployed my database to Vercel also to create mock api, 
you can go to utils/constants and change API_URL to "http://localhost:8000"

then you need to run json-server locally: 
npx json-server -w db.json -p 8000

## Deploy on Vercel

OR the easiest way to see the result of my task is to go to deployed vercel app: https://table-task-final.vercel.app/ :) Enjoy!

