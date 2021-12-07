import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'

const routes = [
    <Routes>
        {/* Frontend */}
        <Route path="/" exect={true} element={<Login />} />
        {/*
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        */}
        {/* Backend */}
        {/* <Route path="/" exect={true} element={} /> */}
    </Routes>
]

export default routes