import React from 'react';
import Advice from '../../components/Advice/index';
import image1 from '../../assets/images/advices1.png';
import image2 from '../../assets/images/advices2.png';
import image3 from '../../assets/images/advices3.png';
import image4 from '../../assets/images/advices4.png';
import image5 from '../../assets/images/advices5.png';
import image6 from '../../assets/images/advices6.png';

const data = [
	{
		id: 1,
		img: image1,
		text: 'Identify the most important and urgent tasks and place them at the top of the list.',
	},
	{
		id: 2,
		img: image2,
		text: "Don't overload your list with too many tasks. Set achievable goals for each day.",
	},
	{
		id: 3,
		img: image3,
		text: 'Regularly review and update your task list to remove completed tasks and add new ones as needed.',
	},
	{
		id: 4,
		img: image4,
		text: 'If you have large and complex tasks, divide them into smaller steps. This will make tracking and gradual completion easier.',
	},
	{
		id: 5,
		img: image5,
		text: 'Add detailed notes or descriptions to each task to remember important details or the necessary steps to follow.',
	},
	{
		id: 6,
		img: image6,
		text: 'Take time at the end of each day or week to review your completed tasks and assess your list of pending tasks. Adjust and update as needed.',
	},
];

export const Advices = () => {
	return (
		<>
			<h1>Transform your Lists into Efficiency</h1>
			{data.map(e => {
				return <Advice key={e.id} img={e.img} text={e.text} />;
			})}
		</>
	);
};
