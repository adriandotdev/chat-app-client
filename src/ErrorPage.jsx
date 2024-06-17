import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<main className="min-h-[100vh]  flex flex-col justify-center items-center">
			<h1 className="text-4xl font-bold text-yellow-300">Oops!</h1>
			<p className="text-2xl mt-5">Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</main>
	);
}
