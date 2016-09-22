import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import CommentBox from './components/CommentBox';
import store from './store'

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <CommentBox />
</Provider>, app);
