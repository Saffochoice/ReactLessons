import React from 'react';

function Form() {
	return (
		<form action="" className="signup-form mdc-theme---dark">
			<div className="mdc-textfield"><input type="text" name="firstname" placeholder="Имя" className="mdc-textfield__input"/></div>
			
			<div className="mdc-textfield"><input type="text" name="lastname" placeholder="Фамилия"/></div>
			<div className="mdc-textfield"><input type="email" name="email" placeholder="Email"/></div>
			<div className="mdc-textfield"><input type="password" name="password" placeholder="Пароль"/></div>
			<button className="mdc-button mdc-button--primary mdc-button--raised"></button>
		</form>
	);
}

export default Form;