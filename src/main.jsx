import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from '@/components/TodoApp'
import './styles/app.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
        <TodoApp />
    </BrowserRouter>
</React.StrictMode>
)
