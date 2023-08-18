import { ConfigProvider } from 'antd'
import { ReactElement } from 'react'

import './App.scss'
import Home from './pages/home/home'

const App: React.FC = (): ReactElement =>  (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#002F6C',
                // colorBgContainer: '#f6ffed',
            },
        }}
    >
        <Home />
    </ConfigProvider>
)
export default App
