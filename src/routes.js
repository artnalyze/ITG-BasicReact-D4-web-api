import { Route, Routes } from 'react-router-dom'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const routes = [
    <Routes>
        {/* Frontend */}
        <Route path="/" exect={true} element={<Login />} />
        <Route path="/login" exect={true} element={<Login />} />
        <Route path="/register" exect={true} element={<Register />} />
        <Route path="/forgotpassword" exect={true} element={<Forgotpassword />} />
        
        {/* Backend */}
        {/* <Route path="/" exect={true} element={} /> */}
    </Routes>
]

export default routes