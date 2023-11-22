import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "./pages/Home.page"
import { LoginPage } from "@/pages/Login.page"

export const routes = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
])
