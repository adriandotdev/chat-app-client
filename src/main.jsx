import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Routes
import Root from "./routes/Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import LoginRoute from "./routes/LoginRoute.jsx";
import SignUpRoute from "./routes/SignUpRoute.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "login", element: <LoginRoute /> },
			{ path: "signup", element: <SignUpRoute /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
