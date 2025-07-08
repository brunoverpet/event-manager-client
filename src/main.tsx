import React from 'react'
import './main.css'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.tsx'
import Event from "./Event.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<App />} />
            <Route path='/event/:id' element={<Event />} />
        </>

    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
