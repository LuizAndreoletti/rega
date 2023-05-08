const editBtn = document.getElementById('edit-btn');
		const saveBtn = document.getElementById('save-btn');
		const cancelBtn = document.getElementById('cancel-btn');
		const firstNameInput = document.getElementById('nome');
		const lastNameInput = document.getElementById('sobrenome');
		const emailInput = document.getElementById('email');
		const passwordInput = document.getElementById('senha');
		const errorMsg = document.getElementById('error-msg');

		editBtn.addEventListener('click', () => {
			editBtn.classList.add('hide');
			saveBtn.classList.remove('hide');
			cancelBtn.classList.remove('hide');
			firstNameInput.disabled = false;
			lastNameInput.disabled = false;
			emailInput.disabled = false;
			passwordInput.disabled = false;
		});
		cancelBtn.addEventListener('click', () => {
			editBtn.classList.remove('hide');
			saveBtn.classList.add('hide');
			cancelBtn.classList.add('hide');
			firstNameInput.disabled = true;
			lastNameInput.disabled = true;
			emailInput.disabled = true;
			passwordInput.disabled = true;
			errorMsg.classList.add('hide');
		});

		saveBtn.addEventListener('click', (event) => {
			event.preventDefault();

			// Validar campos antes de salvar as alterações
			if (firstNameInput.value === '' || lastNameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
				errorMsg.innerHTML = 'Por favor, preencha todos os campos.';
				errorMsg.classList.remove('hide');
			} else if (!isValidEmail(emailInput.value)) {
				errorMsg.innerHTML = 'Por favor, insira um endereço de e-mail válido.';
				errorMsg.classList.remove('hide');
			} else {
				// Salvar as alterações e desabilitar os campos novamente
				alert("Informações salvas");
				editBtn.classList.remove('hide');
				saveBtn.classList.add('hide');
				cancelBtn.classList.add('hide');
				firstNameInput.disabled = true;
				lastNameInput.disabled = true;
				emailInput.disabled = true;
				passwordInput.disabled = true;
				errorMsg.classList.add('hide');
				
			}
		});

		// Função para validar o endereço de e-mail
		function isValidEmail(email) {
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		}