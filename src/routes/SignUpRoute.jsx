import { useState } from "react";
import { Link } from "react-router-dom";
import Textbox from "../components/Textbox";

function SignUpRoute() {
	const [step, setStep] = useState(() => 0);

	const DecreaseStep = () => {
		setStep((previous) => {
			if (previous === 0) return 0;

			return previous - 1;
		});
	};

	const IncreaseStep = () => {
		setStep((previous) => {
			if (previous === 2) return 2;

			return previous + 1;
		});
	};
	return (
		<main className="min-h-[100vh]  flex items-center justify-center">
			<div className="w-full flex flex-col justify-center max-w-[30rem] p-4">
				<h1 className="text-xl sm:text-2xl lg:text-4xl mb-5 font-bold text-yellow-400 self-center">
					{step === 0
						? "Personal Information"
						: step === 1
						? "Account Details"
						: "Upload Image"}
				</h1>
				<ul className="steps steps-horizontal">
					<li
						className={`step font-medium ${step >= 0 && "step-primary"}`}
					></li>
					<li
						className={`step font-medium ${step >= 1 && "step-primary"}`}
					></li>
					<li
						className={`step font-medium ${step >= 2 && "step-primary"}`}
					></li>
				</ul>
				<form onSubmit={(e) => e.preventDefault()} className="w-full mt-2">
					{step === 0 && (
						<>
							<Textbox
								type="text"
								label="Given Name"
								htmlFor="given-name"
								placeholder="Given Name"
							/>
							<Textbox
								type="text"
								label="Middle Name (If applicable)"
								htmlFor="middle-name"
								placeholder="Middle Name"
							/>
							<Textbox
								type="text"
								label="Last Name"
								htmlFor="last-name"
								placeholder="Last Name"
							/>
							<Textbox
								type="date"
								label="Date of Birth"
								htmlFor="date-of-birth"
								placeholder="Date of Birth"
							/>
							<Textbox
								type="tel"
								label="Mobile Number"
								htmlFor="mobile-number"
								placeholder="Mobile Number"
							/>
						</>
					)}

					{step === 1 && (
						<>
							<Textbox
								type="text"
								label="Username"
								htmlFor="username"
								placeholder="Username"
							/>
							<Textbox
								type="password"
								label="Password"
								htmlFor="password"
								placeholder="Password"
							/>
							<Textbox
								type="password"
								label="Confirm Password"
								htmlFor="confirm-password"
								placeholder="Confirm Password"
							/>
						</>
					)}

					{step === 2 && (
						<>
							<input
								type="file"
								className="file-input file-input-bordered file-input-primary w-full mb-5"
							/>
						</>
					)}
					<div className={`grid gap-2 w-full ${step >= 1 && "grid-cols-2"}`}>
						{step >= 1 && (
							<button
								className="btn btn-primary font-bold text-md"
								onClick={DecreaseStep}
							>
								Previous
							</button>
						)}
						<button
							className="btn btn-primary font-bold text-md"
							onClick={IncreaseStep}
						>
							{step >= 2 ? "Submit" : "Next"}
						</button>
					</div>
				</form>
				<p className="self-center mt-3">
					Already have an account?{" "}
					<span className="text-yellow-400 font-bold">
						<Link to="/login" replace={true}>
							Sign In
						</Link>
					</span>
				</p>
			</div>
		</main>
	);
}

export default SignUpRoute;
