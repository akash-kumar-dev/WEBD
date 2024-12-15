"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// 1. Insert user
// async function insertUser(email: string, name: string, password: string){
//     const res = await prisma.user.create({
//       data: {
//         email: email,
//         name: name,
//         password: password
//       },
//       select:{
//         id: true,
//         password: true,
//         name: true,
//       },
//     });
//     console.log(res);
//   }
//   insertUser("admin@gmail.com", "Admin", "12345");
// 2. Update user
// async function updateUser(email: string, name: string){
//   const res = await prisma.user.update({
//     where: { email: email },
//     data: { name: name },
//   });
//   console.log(res);
// }
// updateUser("admin@gmail.com", "Super Admin");
// 3. Delete user
// async function deleteUser(email: string){
//   const res = await prisma.user.delete({
//     where: { email: email },
//   });
//   console.log(res);
// }
// deleteUser('admin@gmail.com');
// 4. Fetch all users
function fetchAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany();
        console.log(res);
    });
}
fetchAllUsers();
// 5. Fetch user by email if exists else return null
// async function fetchUserByEmail(email: string){
//   const res = await prisma.user.findUnique({
//     where: { email: email },
//   });
//   console.log(res);
// }
// fetchUserByEmail('chandan@gmail.com');
