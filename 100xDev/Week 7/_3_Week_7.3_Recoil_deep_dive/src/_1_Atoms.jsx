import { useState } from 'react'
import { networkAtom, jobsAtom, notifiactionAtom, messagingAtom } from './atom'
import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';

const _1_Atoms = () => {

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
  // const [messagingCount, setMessagingAtom] = useRecoilState(messagingAtom);   // smae as useState

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotifiactionCount >= 100 ? "99+" : networkNotifiactionCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging {messagingCount}</button>
      <button>Notification ({notifiactionCount})</button>
      <button>Me</button>
      <ButtonUpdater />

      {/* useRecoilState */}
      {/* <button onClick={() => {
        setMessagingAtom(messagingCount + 1);
      }}>Me</button> */}
    </>
  )
}

function ButtonUpdater() {
  const setMessagingAtom = useSetRecoilState(messagingAtom);
  // usesetRecoilState is only for setter and not for getter

  return <button onClick={() => {
    setMessagingAtom(c => c + 1);
  }}>Me</button>

}

export default _1_Atoms
