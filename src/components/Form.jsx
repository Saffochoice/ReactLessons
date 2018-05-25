import React from 'react';


function Form() {
	return (
		<form action="" className="signup-form --mdc-theme-on-dark">
			<div className="mdc-text-field"><input type="text" name="firstname" placeholder="Имя" className="mdc-text-field__input "/></div>
			
			{/* <div className="mdc-textfield"><input type="text" name="lastname" placeholder="Фамилия"/></div>
			<div className="mdc-textfield"><input type="email" name="email" placeholder="Email"/></div>
			<div className="mdc-textfield"><input type="password" name="password" placeholder="Пароль"/></div> */}
			<button className="mdc-button mdc-button--primary mdc-button--raised">Зарегистрироватсья</button>
		</form>
	);
}

export default Form;