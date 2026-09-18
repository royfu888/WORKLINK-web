const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
const strategicForm = document.querySelector('#strategicForm');
const strategicDistributionCard = document.querySelector('.ways .strategic:nth-child(2)');
const submitButton = strategicForm.querySelector('.formSubmit');

const distributionLead = document.createElement('p');
distributionLead.className = 'distributionLead';
distributionLead.textContent = '適合擁有大量企業客戶或垂直產業資源的策略夥伴，透過規模化授權與市場合作，共同建立長期 SaaS 成長。';
strategicDistributionCard.querySelector('.modelTags').before(distributionLead);

const confidentialNote = document.createElement('p');
confidentialNote.className = 'confidentialNote';
confidentialNote.innerHTML = 'Your inquiry will be handled confidentially by the WorkLink team.<br>您的策略合作洽詢將由 WorkLink 團隊以保密方式處理。';
submitButton.after(confidentialNote);

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
	const subject = `[Strategic Partnership] ${data.get('direction')} - ${data.get('company')}`;
	const body = [
		`公司名稱：${data.get('company')}`,
		`姓名：${data.get('name')}`,
		`職稱：${data.get('title')}`,
		`企業 Email：${data.get('email')}`,
		`公司網站：${data.get('website') || '未提供'}`,
		`合作方向：${data.get('direction')}`,
		`簡短訊息：${data.get('message')}`
	].join('\n');

	window.location.href = `mailto:service@worklink.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	formNote.textContent = '已準備好郵件內容，請在郵件程式中確認並送出。';
});