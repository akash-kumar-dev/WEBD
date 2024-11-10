import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import _1_useState from './_1_useState';
import _2_Lifecycle_Events from './_2_Lifecycle_Events';
import _3_custom_hooks from './_3_custom_hooks';
import _4_useIsOnline_hook from './_4_useIsOnline_hook';
import _5_useMousePointer from './_5_useMousePointer';
import _6_useInterval from './_6_useInterval';
import _7_useDebounce from './_7_useDebounce';

// useDebounce
function App() {
  return (
    <>
    <_1_useState />
    <_2_Lifecycle_Events />
    <_3_custom_hooks />
    <_4_useIsOnline_hook />
    <_5_useMousePointer />
    <_6_useInterval />
    <_7_useDebounce />
    </>
  )
}


export default App
