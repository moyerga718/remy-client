import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { Authorized } from "./Authorized"
import { Home } from "../home/Home"

export const ApplicationViews = ({ token, setToken, setUserId, userId }) => {
    return <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} />} />
        <Route path="/register" element={<Register setToken={setToken} setUserId={setUserId} />} />
        <Route path="/" element={<Home token={token} setToken={setToken}/>} />
        <Route element={<Authorized token={token} />}>
            <Route path="/" element={<Home token={token} setToken={setToken}/>} />
        </Route>
    </Routes>
}