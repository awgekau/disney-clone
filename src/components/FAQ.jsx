import React, { useState } from 'react';
import styled from 'styled-components';

const FAQ = () => {
	const faqData = [
		{
			question: 'What is Disney+?',
			answer: (
				<>
					<p>
						Disney+ is the dedicated streaming home of your favourite stories
						from Disney, Pixar, Marvel, Star Wars, National Geographic; as well
						as a huge range of general entertainment with Star — all in one
						place. With thousands of movies, TV series, and exclusive Originals
						to choose from, there’s something for everyone on Disney+.
						Subscribers can also enjoy a number of benefits included in their
						subscription, such as:
					</p>
					<ul>
						<li>
							Unlimited downloads on up to 10 devices and up to 7 different
							profiles
						</li>
						<li>
							A robust parental controls system including dedicated profiles for
							children
						</li>
						<li>
							4K UHD streaming with Dolby Vision and Dolby Atmos support on
							compatible devices for no extra cost
						</li>
						<li>Up to 4 screens can stream simultaneously</li>
					</ul>
				</>
			),
		},
		{
			question: 'What can I watch on Disney+?',
			answer: (
				<>
					<p>
						With thousands of films and series from the greatest storytellers
						around the globe and more added each month, you will always find
						something to watch on Disney+:
					</p>
					<ul>
						<li>
							The biggest animated blockbusters from Disney, like The Lion King
							and Encanto
						</li>
						<li>
							Heart-warming storytelling for all ages from the masterminds at
							Pixar such as Luca and Turning Red
						</li>
						<li>
							Experience the ever-growing story of the Marvel Cinematic Universe
							like never before with must-see exclusive Original series from
							Marvel Studios She-Hulk and Moon Knight
						</li>
						<li>
							Relive the epic Saga in a galaxy far away with Star Wars hit
							series, like The Mandalorian and Andor
						</li>
						<li>
							Open your eyes to the beauty of our planet with fearless National
							Geographic explorers and a number of insightful documentaries,
							like <i>Gordon Ramsay: Uncharted</i> and <i>Welcome to Earth</i>
						</li>
						<li>
							With Star you will find the most talked about bingeable series
							like the global phenomenon <i>The Walking Dead</i> and{' '}
							<i>Grey&apos;s Anatomy</i>
						</li>
					</ul>
				</>
			),
		},
		{
			question: 'How much does Disney+ cost?',
			answer: (
				<p>
					The monthly subscription price for Disney+ in Qatar is 42.99 QAR a
					month or 429.90 QAR for an annual subscription (12 months for the
					price of 10*).
					<br />
					<br />
					*Saving compared to 12 months of the monthly subscription price.
				</p>
			),
		},
		{
			question: 'What devices are supported?',
			answer: (
				<p>
					Disney+ supports mobile devices, web browsers, game consoles, set-top
					boxes, and smart TVs. Click here for the full list.
				</p>
			),
		},
		{
			question: 'Is there any commitment when signing up for Disney+?',
			answer: (
				<>
					<p>
						There are no commitments and you can cancel at any time, effective
						at the end of your current payment period. Just follow the below 5
						easy steps:
					</p>
					<ol>
						<li>Go to www.disneyplus.com and log in</li>
						<li>Select your Profile</li>
						<li>Select Account</li>
						<li>Select Cancel Subscription</li>
						<li>Select Complete Cancellation to confirm</li>
					</ol>
					<p>For more information, click here.</p>
				</>
			),
		},
	];

	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<FAQSection>
			<FAQHeading>Frequently Asked Questions</FAQHeading>
			<FAQList>
				{faqData.map((item, index) => {
					const isOpen = openIndex === index;
					return (
						<QuestionContainer key={index}>
							<QuestionHeader onClick={() => toggleFAQ(index)} isOpen={isOpen}>
								<span>{item.question}</span>
								<CaretIcon
									src={
										isOpen
											? '/images/caret-up-svgrepo-com.svg'
											: '/images/caret-down-svgrepo-com.svg'
									}
									alt={isOpen ? 'Caret up icon' : 'Caret down icon'}
								/>
							</QuestionHeader>
							{isOpen && <Answer>{item.answer}</Answer>}
						</QuestionContainer>
					);
				})}
			</FAQList>
		</FAQSection>
	);
};

export default FAQ;

/* ------------------------------
   STYLED COMPONENTS for the FAQ
------------------------------ */

const FAQSection = styled.section`
	width: 80%;
	margin: 0 auto;
	padding: 60px 20px;
	color: #ffffff;

	@media (max-width: 768px) {
		width: 95%;
	}
`;

const FAQHeading = styled.h2`
	font-size: 41px;
	font-weight: 600;
	text-align: center;
	margin-bottom: 40px;
	font-family: 'Inter', sans-serif;
`;

const FAQList = styled.div`
	display: flex;
	flex-direction: column;
`;

const QuestionContainer = styled.div`
	text-align: left;
	border-bottom: 1px solid #252833;
	margin-bottom: 10px;
`;

const QuestionHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	font-family: 'Inter', sans-serif;
	font-size: 25px;
	font-weight: 600;
	padding: 24px 0;
	width: 100%;

	/* If open, color white; otherwise, original gray. */
	color: ${({ isOpen }) => (isOpen ? '#ffffff' : '#8f98b2')};

	/* On hover, always turn white. */
	&:hover {
		color: #ffffff;
	}
`;

const CaretIcon = styled.img`
	width: 25px;
	height: 25px;
`;

const Answer = styled.div`
	font-family: 'Inter', sans-serif;
	font-size: 18px;
	text-align: left;
	font-weight: 400;
	color: #8f98b2;
	line-height: 30px;
	padding: 0 0 16px;
`;
