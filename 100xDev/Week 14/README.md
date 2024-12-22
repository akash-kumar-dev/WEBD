# Next.js
### minor inconveniences in React:
- maintain a saperate Backend for API routes
- React does not provide box routing (have to use `react-router-dom`)
- React is not SEO optimized
- Waterfalling problem

### Next.js offerings:
1. server side rendering (SSR), get's rid of SEO problems
2. API routes: single codebase for both frontend and backend
3. file based routing (no need to use `react-router-dom`)
4. Bundle size optimisation, Static Site Generation (SSG)
5. maintained by the Vercel team

Downside:
1. can't be distributed via `CDN`, always needs a server runnig that does server side rendering and hence is expensive

## Create a new Next.js App
```bash
npx create-next-app@latest 
```