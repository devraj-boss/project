
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Kutta from './content/userContext.jsx'
createRoot(document.getElementById('root')).render(
    <Kutta>
        <App />
    </Kutta>   
)
