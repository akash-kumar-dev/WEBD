import { atom, selector } from "recoil";

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });

// Asynchronous Data Queries
// selectors can be used as one way to incorporate asynchronous data into recoil data-flow graph.
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkSelector",
        get: async () => {
            const res = await fetch("https://sum-server.100xdevs.com/notifications");
            const data = await res.json();
            return data;
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})
