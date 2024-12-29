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
		</Container>
	);
};

const Container = styled.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
`;
const Content = styled.div`
	margin-bottom: 10vh;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
`;

const BackgroundImage = styled.div`
	background-image: url('/images/new-login-bg.webp');
	z-index: -1;
	height: 100%;
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

	&: hover {
		transform: scale(1.02);
	}
`;

const Description = styled.p`
	color: #f9f9f9;
	font-weight: bold;
	font-size: 28px;
`;
export default LogIn;
