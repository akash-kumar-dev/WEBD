### tsconfig.json

#### 1. `target`
```json
"target": "es2016"
```
it helps to compile the code to a specific version of JavaScript.

Ex: 
```
<!-- for es2016 -->
<!-- "target": "es2016" -->

const greet = (name: string) => `Hello, ${name}!`;
```

```
<!-- for es5 -->
<!-- "target": "es5" -->
var greet = function (name) { return "Hello, " + name + "!"; };
```

#### 2. `rootDir`
where should the compiler look for `.ts` files.
good practice is to set it to `src` folder.
```json
"rootDir": "./src", 
```

#### 3. `outDir`
where should the compiler put the compiled `.js` files.
```json
"outDir": "./dist",
```
we can dist folder in `.gitignore` file.

#### 4. `noImplicitAny`
if set to `true`, the compiler will throw an error if it encounters a variable or parameter that is implicitly typed as `any`.
```json
"noImplicitAny": true,
```

#### 5. `removeComments`
if set to `true`, the compiler will remove all comments from the output.
```json
"removeComments": true,
```

## Interfaces
`Interfaces` are used to define type of object.