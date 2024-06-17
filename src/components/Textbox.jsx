import React from "react";

function Textbox({ type, label, placeholder, htmlFor }) {
	return (
		<section className="flex flex-col gap-1 max-w-[30rem] mb-3">
			<label className="font-semibold" htmlFor={htmlFor}>
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				className="input input-primary w-full"
			/>
		</section>
	);
}

export default Textbox;
