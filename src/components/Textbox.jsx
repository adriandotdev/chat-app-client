import React from "react";

function Textbox({
	type,
	label,
	placeholder,
	htmlFor,
	register,
	validation,
	errors,
}) {
	console.log(errors);
	return (
		<section className="flex flex-col gap-1 max-w-[30rem] mb-3">
			<label className="font-semibold" htmlFor={htmlFor}>
				{label}
			</label>
			<input
				{...register(htmlFor, validation)}
				type={type}
				placeholder={placeholder}
				className={`input w-full ${
					errors[htmlFor] ? "input-error" : "input-primary"
				}`}
			/>
			{errors[htmlFor] && (
				<small className="text-red-500 font-semibold">
					{errors[htmlFor].message}
				</small>
			)}
		</section>
	);
}

export default Textbox;
