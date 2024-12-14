1. initialize an empty typescript project
```
npm init -y
npx tsc --init
```

2. Chaneg the `rootDir` and `outDir` in `tsconfig.json`
```
"rootDir": "./src",
"outDir": "./dist",
```

3. install the `pg` library and its types
```
npm i pg
npm i @types/pg
```
