const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
const strategicForm = document.querySelector('#strategicForm');

menu.addEventListener('click', () => links.classList.toggle('open'));

strategicForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const formNote = strategicForm.querySelector('.formNote');

	if (!strategicForm.checkValidity()) {
		strategicForm.reportValidity();
		formNote.textContent = '請完整填寫必要資訊。';
		return;
	}

	const data = new FormData(strategicForm);
	const subject = `WorkLink Strategic Conversation - ${data.get('direction')}`;
	const body = [
		`公司名稱：${data.get('company')}`,
		`姓名：${data.get('name')}`,
		`職稱：${data.get('title')}`,
		`企業 Email：${data.get('email')}`,
		`合作方向：${data.get('direction')}`,
		`簡短訊息：${data.get('message')}`
	].join('\n');

	window.location.href = `mailto:service@worklink.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	formNote.textContent = '已準備好郵件內容，請在郵件程式中確認並送出。';
});