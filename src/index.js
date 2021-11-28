import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter';

function App() {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('app'))
