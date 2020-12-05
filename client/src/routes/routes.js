import { LayoutAdmin } from "../layouts/LayoutAdmin";
import { LayoutUser } from "../layouts/LayoutUser";


export const routes = [
    {
        exact: true,
        path: '/admin',
        component: LayoutAdmin,
        subRoutes: [
            {
                exact: true,
                path: '/',
                component: 'component',
            },
            {
                exact: true,
                path: '/',
                component: 'component',
            }
        ]
    },
    {
        exact: false,
        path: '/',
        component: LayoutUser,
        subRoutes: [
            {
                exact: true,
                path: '/',
                component: 'component',
            },
            {
                exact: true,
                path: '/',
                component: 'component',
            }
        ]
    }
]