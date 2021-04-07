import React from "react";
import "../Style/Contact.css";
import MailIcon from "@material-ui/icons/Mail";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import emailjs from "emailjs-com";

function Contact() {
	const SendEmail = (e) => {
		if (
			e.target[0].value == "" ||
			e.target[1].value == "" ||
			e.target[2].value == ""
		) {
			alert("Please fill in all inputs");
		} else {
			emailjs
				.sendForm(
					"service_93uf50l",
					"template_maya2qd",
					e.target,
					"user_N205gGNfTH3keGEpdLrqR"
				)
				.then(
					() => {
						alert("Thank you! Your message has been submitted");
						e.target.reset();
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
		e.preventDefault();
	};

	return (
		<div className="Contact__mainContainer">
			<div id="Contact" className="fix-header"></div>
			<div className="Contact__container">
				<div className="Contact__IconTitleContainer">
					<MailIcon className="Contact__MailButton" />
					<h2 className="Contact__title">Get in touch</h2>
				</div>
				<div className="Contact__formContainer">
					<form
						id="myform"
						className="Contact_form"
						noValidate
						autoComplete="off"
						onSubmit={SendEmail}>
						<div className="Contact__formNameContainer">
							<h4 className="Contact__formName">Name</h4>
							<TextField
								className="Contact__input"
								required={true}
								name="name"
								id="standard-basic"
							/>
						</div>
						<div className="Contact__formEmailContainer">
							<h4 className="Contact__formEmail">Email</h4>
							<TextField
								className="Contact__input"
								required={true}
								name="email"
								id="filled-basic"
								variant="standard"
							/>
						</div>
						<div className="Contact__formMessageContainer">
							<h4 className="Contact__formMessage">Message</h4>
							<TextField
								className="Contact__input"
								margin="none"
								rowsMax={7}
								rows={5}
								multiline={true}
								required={true}
								name="message"
								id="outlined-basic"
								variant="outlined"
							/>
						</div>
						<Button
							form="myform"
							type="submit"
							variant="contained"
							color="primary"
							className="Contact__sendButton"
							endIcon={<Icon>send</Icon>}>
							Send
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
