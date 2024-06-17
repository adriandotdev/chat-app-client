import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// Components
import Textbox from "../components/Textbox";

function LoginRoute() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const SignIn = (data) => {
		console.log(data);
	};
	return (
		<main className="min-h-[100vh]  flex items-center justify-center">
			<div className="w-full flex flex-col justify-center max-w-[30rem] p-4">
				<h1 className="text-xl sm:text-2xl lg:text-4xl mb-5 font-bold text-yellow-400 self-center">
					Welcome to Humble
				</h1>
				<form onSubmit={handleSubmit(SignIn)} className="w-full">
					<Textbox
						type="text"
						label="Username"
						htmlFor="username"
						placeholder="Username"
						register={register}
						validation={{
							required: "Please provide your username",
							minLength: {
								value: 12,
								message: "Username must be at least 12 characters",
							},
						}}
						errors={errors}
					/>
					<Textbox
						type="password"
						label="Password"
						htmlFor="password"
						placeholder="Password"
						register={register}
						validation={{ required: "Please provide your password" }}
						errors={errors}
					/>
					<button className="btn btn-primary w-full mt-5 font-bold text-md">
						Sign In
					</button>
				</form>
				<p className="self-center mt-3">
					Don't have an account yet?{" "}
					<span className="text-yellow-400 font-bold">
						<Link to="/signup">Sign Up</Link>
					</span>
				</p>
				<p className="self-center">
					<span className="text-yellow-400 font-bold">
						<Link>Forgot Password?</Link>
					</span>
				</p>
			</div>
		</main>
	);
}

export default LoginRoute;
