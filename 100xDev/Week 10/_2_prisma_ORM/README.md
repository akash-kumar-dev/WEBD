## ORMS
ORM stands for Object-Relational Mapping, a programming technique for converting data between incompatible type systems in object-oriented programming languages. This creates, for instance, a “virtual object database” that can be used from within the programming language.
- ORM are used to abstract the complexity of the underlying database into simple,more easily managed objects with in the code
- ORM let you easily interact with the database using an object-oriented interface (without worrying about the underlying SQL code)

### why ORMs

- Simpler syntax (convert objects to SQL queries under the hood)
- Abstracting that lets you flip the database you are using. unified API irrespective of the database,
- Type safety/ Auto completion
- Automatic migration


# Prisma
Next generation ORM for Node.js and TypeScript
- **Data Model :**  in a single file, define your schema. What it looks like, what tables you have, what field each table has, how rows related to each other.
- **Automated Migrations :** Prisma generate and runs database migrations based on changes to the prisma schema.
- **Type safety: ** prisma generates a type-safe database client based on the prisma schema.
- Auto complete

#### installing prisma in a fresh App
```
npm init -y
npm install prisma typescript ts-node @types/node --save-dev
npx tsc --init
npx prisma init
```

- migrate the prisma schema to the database
```
npx prisma migrate dev --name -------
```

- generate the client
```
npx prisma generate
```