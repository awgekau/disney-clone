import styled from 'styled-components';

const LogIn = (props) => {
	return (
		<Container>
			<Content>
				<CTA>
					<CTAlogoOne src="images/disney-plus-logo.webp" alt="" />
					<Description>
						Stream brand new Disney+ Originals,
						<br />
						blockbusters, binge-worthy series and more
					</Description>
					<SignUp>Sign Up Now</SignUp>
				</CTA>
				<BackgroundImage />
			</Content>
			<Info src="/images/info2.png" alt="" />
			<Description2>Watch the way you want</Description2>
			<Note>
				Discover the streaming home of Disney, Pixar, Marvel, Star Wars,
				National Geographic and entertainment with Star on Disney+.
			</Note>
			<WaystoWatch src="/images/ways2watch.webp" alt="" />
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;
	overflow-y: auto; /* Allow scrolling */
`;

const Content = styled.div`
	width: 100%;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
`;

const BackgroundImage = styled.div`
	background-image: url('/images/new-login-bg.webp');
	z-index: -1;
	height: 100vh;
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`;

const CTA = styled.div`
	margin-bottom: 2vw;
	margin-top: 249px;
	max-width: 650px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CTAlogoOne = styled.img`
	margin-bottom: 8px;
	max-width: 221px;
	min-height: 1px;
	display: block;
	width: 100%;
`;

const SignUp = styled.a`
	font-weight: 600;
	color: #d1e8ff;
	background-image: linear-gradient(93.87deg, #095ae6, #062794);
	margin-bottom: 12px;
	border: 0 solid;
	width: 100%;
	max-width: 340px;
	min-width: 150px;
	text-align: center;
	font-family: 'Inter', sans-serif;
	font-size: 19.5px;
	padding: 16px;
	border-radius: 8px;
	line-height: 20px;
	transition: transform 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		transform: scale(1.02);
	}
`;

const Description = styled.p`
	color: hsla(0, 0%, 95.3%, 1);
	font-weight: bold;
	font-size: 28px;
`;

const Info = styled.img`
	width: 100%;
	margin-top: -55px;
	padding: 40px 0;
`;
const Description2 = styled.h2`
	font-size: 42px;
	font-weight: 600;
	font-family: 'Inter', sans-serif;
	color: #e1e6f0;
	text-align: center;
	letter-spacing: -0.4px;
	line-height: 42px;
	margin-left: 40px;
	margin-right: 40px;
	margin-top: 45px;
`;
const Note = styled.p`
	font-size: 21px;
	color: #8f98b2;
	font-weight: 500;
	letter-spacing: 0;
	line-height: 24px;
	margin-left: 80px;
	margin-right: 80px;
	margin-top: -12px;
`;
const WaystoWatch = styled.img`
	width: 80%;
	margin: 48px auto;
	display: block;
`;

export default LogIn;
