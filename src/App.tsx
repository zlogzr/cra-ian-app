import { Button } from 'antd'

import './App.less'
import { ReactComponent as Logo } from './assets/logo.svg'

function App() {
  return (
    <div className="app">
      <Logo width={200} />
      <Button type="primary">登录</Button>
      <div className="test">111</div>
    </div>
  )
}

export default App
