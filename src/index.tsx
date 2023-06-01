import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import App from './App';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
]);

root.render(
    <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>
);