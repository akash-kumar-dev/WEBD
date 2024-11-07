import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notifiactionAtom = atom({
    key: "notifiactionAtom",
    default: 12
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const networkNotifiactionCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notifiactionAtomCount = get(notifiactionAtom);
        const messagingAtomCount = get(messagingAtom);

        return networkNotifiactionCount + jobsAtomCount + notifiactionAtomCount + messagingAtomCount;
    }
})