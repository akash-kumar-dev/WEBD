Step 11 - Initialise common
===========================

1.  Create a new folder called `common` and initialize an empty ts project in it

    mkdir common
    cd common
    npm init -y
    npx tsc --init

1.  Update `tsconfig.json`

    "rootDir": "./src",
    "outDir": "./dist",
    "declaration": true,

1.  Sign up/login to npmjs.org

2.  Run `npm login`

3.  Update the `name` in `package.json` to be in your own npm namespace, Update main to be `dist/index.js`

    {
      "name": "@100xdevs/common-app",
      "version": "1.0.0",
      "description": "",
    	"main": "dist/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    

1.  Add `src` to `.npmignore`

2.  Install zod

    npm i zod

1.  Put all types in `src/index.ts`

1.  signupInput / SignupInput
2.  signinInput / SigninInput
3.  createPostInput / CreatePostInput
4.  updatePostInput / UpdatePostInput

Solution

    import z from "zod";
    
    export const signupInput = z.object({
        email: z.string().email(),
        password: z.string(),
        name: z.string().optional(),
    });
    
    export type SignupType = z.infer<typeof signupInput>;
    
    export const signinInput = z.object({
        email: z.string().email(),
        password: z.string(),
    });
    
    export type SigninType = z.infer<typeof signinInput>;
    
    export const createPostInput = z.object({
        title: z.string(),
        content: z.string(),
    });
    
    export type CreatePostType = z.infer<typeof createPostInput>;
    
    export const updatePostInput = z.object({
        title: z.string().optional(),
        content: z.string().optional(),
    });
    
    export type UpdatePostType = z.infer<typeof updatePostInput>;

1.  `tsc -b` to generate the output

2.  Publish to npm

    npm publish --access public

1.  Explore your package on npmjs