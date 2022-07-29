import { Button } from 'antd'

import './App.css'
import { ReactComponent as Logo } from './assets/logo.svg'

function App() {
  return (
    <div className="app">
      <Logo width={200} />
      <Button type="primary">登录</Button>
    </div>
  )
}

export default App
