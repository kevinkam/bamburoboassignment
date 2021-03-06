import '@babel/polyfill'
import * as React from 'react'
import ReactDOM from 'react-dom'
import List from './components/List'

class App extends React.PureComponent {
    render() {
        return <List />
    }
}

ReactDOM.render(<App />, document.getElementById('root'))