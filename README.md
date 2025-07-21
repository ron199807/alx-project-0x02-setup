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