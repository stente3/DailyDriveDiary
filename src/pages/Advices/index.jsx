// import { Advice } from '../../components/Advice';
import image1 from '../../assets/images/advices1.png';
import image2 from '../../assets/images/advices2.png';
import image3 from '../../assets/images/advices3.png';
import image4 from '../../assets/images/advices4.png';
import image5 from '../../assets/images/advices5.png';
import image6 from '../../assets/images/advices6.png';

const data = [
	{
		img: image1,
		text: 'Identify the most important and urgent tasks and place them at the top of the list.',
	},
	{
		img: image2,
		text: "Don't overload your list with too many tasks. Set achievable goals for each day. ",
	},
	{
		img: image3,
		text: 'Regularly review and update your task list to remove completed tasks and add new ones as needed. ',
	},
	{
		img: image4,
		text: ' If you have large and complex tasks, divide them into smaller steps. This will make tracking and gradual completion easier.',
	},
	{
		img: image5,
		text: 'Add detailed notes or descriptions to each task to remember important details or the necessary steps to follow ',
	},
	{
		img: image6,
		text: 'Take time at the end of each day or week to review your completed tasks and assess your list of pending tasks. Adjust and update as needed. ',
	},
];

export const Advices = () => {
	return (
		<>
			<h1>Transform your Lists into Efficiency</h1>
			{data.map(e => {
				return (
					<>
						<img src={e.img} />
						<p>{e.text}</p>
					</>
				);
			})}
		</>
	);
};
