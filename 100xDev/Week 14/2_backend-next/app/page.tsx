import axios from "axios";
// import {PrismaClient} from "@prisma/client";
// const client = new PrismaClient();
import client from "@/db";

// async function getUserDetails() {
//   await new Promise((r) => setTimeout(r, 2000));
//   const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
// 	return response.data;
// }

//  Better Fetches
async function getUserDetails() {
  const user = await client.user.findFirst({});
	return {
    email: user?.username,
    name: user?.name || "John Doe"
  }
}
export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}
