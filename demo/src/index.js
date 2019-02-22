// var h1 = document.createElement('h1')

// h1.innerHTML = 'hello react,index.js'

// document.body.appendChild(h1);

// document.getElementsByTagName('h1')[0].style.color = 'red';

import React from 'react';
import ReactDOM from 'react-dom';

const myh1 = React.createElement(
    'h1',
    {title:'标题'},
    '我爱编程'
)

ReactDOM.render(myh1,document.getElementById('app'))