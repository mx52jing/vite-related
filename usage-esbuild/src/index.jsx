import * as React from 'react'
import * as Server from 'react-dom/server'
import dog1 from './assets/image/dog1.webp'
import chuan from './assets/image/chuan.JPG'
import myEnv from 'my-env'

import './index.css'

console.log({ myEnv })
// import('lodash-es').then(res => {
//     console.log('lodash-es result', res, '====================')
// });
let Greet = () => (
    <div>
        <h1>Hello, world!</h1>
        <img src={dog1} alt=""/>
        <img src={chuan} alt=""/>
    </div>
)
console.log(Server.renderToString(<Greet />))