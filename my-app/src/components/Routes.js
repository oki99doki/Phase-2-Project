import App from "./App";




const routes = [
    {
    path: "/",
    element: <App />,
    children: {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/FavoritePage",
        element: <FavoritePage />
    },
    {
        path: "/NewDestination",
        element: <newDestination />
    }
    }
];

export default routes