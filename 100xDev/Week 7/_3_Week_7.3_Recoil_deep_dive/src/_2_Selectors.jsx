import { useMemo, useState } from 'react'
import { networkAtom, jobsAtom, notifiactionAtom, messagingAtom, totalNotificationSelector } from './atom'
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';

const _2_Selectors = () => {

  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )

}

function MainApp() {
  const networkNotifiactionCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notifiactionCount = useRecoilValue(notifiactionAtom);
  const messagingCount = useRecoilValue(messagingAtom);

  // let we wants to show the all notification count on the ME tab
  // const totoalNotificationCount = useMemo(() => {
  //   return networkNotifiactionCount + jobsAtomCount + notifiactionCount + messagingCount;
  // }, [networkNotifiactionCount, jobsAtomCount, notifiactionCount, messagingCount])

  const totoalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotifiactionCount >= 100 ? "99+" : networkNotifiactionCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging {messagingCount}</button>
      <button>Notification ({notifiactionCount})</button>
      <button>Me ({totoalNotificationCount})</button>
    </>
  )
}

export default _2_Selectors
