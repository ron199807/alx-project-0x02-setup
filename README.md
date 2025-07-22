## Next.js Project Setup and Basics.

### Project Setup

1. Create a new Next.js project:
```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

2. Navigate to project:
```bash
cd my-app
```

3. Install Turbo:
```bash
npm install turbo --save-dev
```

4. Configure path aliases in `tsconfig.json`:
```json
{
    "compilerOptions": {
        "paths": {
            "@/*": ["./*"]
        }
    }
}
```

5. Update `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = nextConfig
```

6. Create `turbo.json`:
```json
{
    "$schema": "https://turbo.build/schema.json",
    "pipeline": {
        "build": {
            "outputs": [".next/**", "!.next/cache/**"]
        },
        "lint": {},
        "dev": {
            "cache": false,
            "persistent": true
        }
    }
}
```

7. Project structure should look like:
```
my-app/
├── app/
├── components/
├── public/
├── styles/
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── turbo.json
```

---

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

### Editing Pages

- Edit the main page in `pages/index.tsx`. Changes will auto-update in the browser.
- API routes can be added in `pages/api/`. For example, `pages/api/hello.ts` is accessible at `/api/hello`.

---

### Linting and Building

- To lint the project:
  ```bash
  npm run lint
  ```
- To build the project for production:
  ```bash
  npm run build
  ```
- To start the production server:
  ```bash
  npm start
  ```

---

### Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn-pages-router)
-