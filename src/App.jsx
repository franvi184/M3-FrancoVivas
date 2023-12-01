import { BrowserRouter as router, Routes, Route} from "react-router-dom";
import { Register } from "./pages/Register.jsx";
function App() {
    return(
    <router>
        <Routes>
            <Route path="/"element={<h1>Home</h1>}/>
            <Route path="/login"element={<h1>Login</h1>}/>
            <Route path="/register"element={<Register />}/>
            <Route path="/profile"element={<h1>Profile</h1>}/>
        </Routes>
    </router>
    )
}
export default App