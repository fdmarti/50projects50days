interface QuizData {
	question: string;
	options: string[];
	correct: number;
}

const quizData: QuizData[] = [
	{
		question: 'Which language runs in a web browser?',
		options: ['Java', 'C', 'Python', 'JavaScript'],
		correct: 3,
	},
	{
		question: 'What does CSS stand for?',
		options: [
			'Central Style Sheets',
			'Cascading Style Sheets',
			'Cascading Simple Sheets',
			'Cars SUVs Sailboats',
		],
		correct: 1,
	},
	{
		question: 'What does HTML stand for?',
		options: [
			'Hypertext Markup Language',
			'Hypertext Markdown Language',
			'Hyperloop Machine Language',
			'Helicopters Terminals Motorboats Lamborginis',
		],
		correct: 0,
	},
	{
		question: 'What year was JavaScript launched?',
		options: ['1996', '1995', '1994', 'none of the above'],
		correct: 1,
	},
];

let currentQuestion: number = 0,
	points: number = 0;

const questionBlock = document.querySelector('.question');
const optionsBlock = document.querySelector('.options');
const submitBtn = document.querySelector('.submit');

const loadQuestion = () => {
	cleanContent();

	const { options, question } = quizData[currentQuestion];

	questionBlock!.innerHTML = question;

	for (let i = 0; i < options.length; i++) {
		const option = `
        <div class="group">
            <input type="radio" class="radio" name="option" id="option_${i}">
            <label for="option_${i}">${options[i]}</label>
        </div>`;
		optionsBlock?.insertAdjacentHTML('beforeend', option);
	}
};

const submitQuestion = () => {
	if (currentQuestion === quizData.length) {
		resetForm();
		return;
	}

	const isSelected = optionsBlock!.querySelector(
		'input[name="option"]:checked',
	);
	if (!isSelected) return;

	const valueSelected = isSelected!.id;
	const value = valueSelected.split('_')[1];

	if (quizData[currentQuestion].correct === +value) {
		points++;
	}

	currentQuestion++;

	if (quizData.length != currentQuestion) {
		loadQuestion();
	} else {
		showPoints();
	}
};

const showPoints = () => {
	cleanContent();
	const results = `You answered ${points}/${quizData.length} questions correctly`;
	questionBlock?.insertAdjacentText('beforeend', results);

	submitBtn!.innerHTML = 'Reload';
};

const cleanContent = () => {
	questionBlock!.innerHTML = '';
	optionsBlock!.innerHTML = '';
};

const resetForm = () => {
	currentQuestion = 0;
	points = 0;
	submitBtn!.innerHTML = 'Submit';
	loadQuestion();
};

submitBtn!.addEventListener('click', submitQuestion);
loadQuestion();
