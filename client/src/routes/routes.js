import { LayoutAdmin } from "../layouts/LayoutAdmin";
import { LayoutUser } from "../layouts/LayoutUser";
import { AdminLogin } from "../pages/AdminLogin";
import { AdminRegister } from "../pages/AdminRegister";


export const routes = [
    {
        exact: false,
        path: '/admin',
        component: LayoutAdmin,
        subRoutes: [
            {
                exact: true,
                path: '/admin',
                component: AdminLogin,
            },
            {
                exact: true,
                path: '/admin/register',
                component: AdminRegister,
            }
        ]
    },
    {
        exact: false,
        path: '/',
        component: LayoutUser,
        subRoutes: [
        ]
    }
]