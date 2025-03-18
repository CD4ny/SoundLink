import { Route, Routes } from "react-router";
import Main from "./pages/main";
import Login from "./pages/login";
import List from "./pages/list";
import Account from "./pages/ account";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="account" element={<List/>}>
                <Route path=":id" element={<Account/>}/>
            </Route>
        </Routes>
    )
}
