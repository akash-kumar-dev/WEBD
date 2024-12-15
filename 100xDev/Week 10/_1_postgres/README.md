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

4. connect postgres by terminal
```
psql
pysql -h localhost -p 5432 -U postgres -d newDB # d - database, U - user
```
```
postgres=# \l # list all databases
postgres=# \c newDB # connect to a database
newDB=# \dt # list all tables
newDB=# \d users # describe a table

```