import styled from 'styled-components';
import FAQ from './FAQ';
import { auth, provider } from '../../src/firebase';
import { signInWithPopup } from 'firebase/auth';

const LogIn = () => {
	const handleAuth = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log('User signed in:', result.user);
			})
			.catch((error) => {
				console.error('Sign in error:', error);
			});
	};
	return (
		<Container>
			{/* Absolutely positioned inside Container so it doesn’t push content down */}
			<ButtonWrapper>
				<LogInButton onClick={handleAuth}>Log In</LogInButton>
			</ButtonWrapper>

			<Content>
				<CTA>
					<CTAlogoOne src="images/disney-plus-logo.webp" alt="" />
					<Description>
						Stream brand new Disney+ Originals, blockbusters, binge-worthy
						series and more
					</Description>
					<SignUp>Sign Up Now</SignUp>
				</CTA>
				<BackgroundImage />
			</Content>

			<Info src="/images/info2.png" alt="" />

			<Description2Title>Watch the way you want</Description2Title>
			<Description2>
				Discover the streaming home of Disney, Pixar, Marvel, Star Wars,
				National Geographic and entertainment with Star on Disney+.
			</Description2>
			<WaystoWatch src="/images/ways2watch.webp" alt="" />

			<Description3Title>Exclusive Originals</Description3Title>
			<Description3>
				Movies, series and documentaries you can't see anywhere else, from the
				world's greatest storytellers.
			</Description3>
			<MoviesAndSeries src="/images/movies&series.webp" alt="" />

			<Description4Title>Compatible Device</Description4Title>
			<Devices>
				<TV>
					<TVImg src="/images/tv.webp" alt="tv" />
					<TVDescTitle>TV</TVDescTitle>
					<DeviceList>
						<li>Amazon Fire TV</li>
						<li>Android TV</li>
						<li>Apple TV</li>
						<li>Chromecast</li>
						<li>LG TV</li>
						<li>Samsung</li>
					</DeviceList>
				</TV>
				<Computer>
					<ComputerImg src="/images/computer.webp" alt="computer" />
					<ComputerDescTitle>Computer</ComputerDescTitle>
					<DeviceList>
						<li>Chrome OS</li>
						<li>MacOS</li>
						<li>Windows PC</li>
					</DeviceList>
				</Computer>
				<Mobile>
					<MobileImg src="/images/mobile.webp" alt="mobile" />
					<MobileDescTitle>Mobile</MobileDescTitle>
					<DeviceList>
						<li>Android Phones &amp; Tablets</li>
						<li>iPhone and iPad</li>
					</DeviceList>
				</Mobile>
			</Devices>
			<FAQ />
		</Container>
	);
};

export default LogIn;

/* ------------------------------
   STYLED COMPONENTS
------------------------------ */

/* 1) Parent container is now position: relative
      so absolutely positioned children don't push anything down */
const Container = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;
	overflow-y: auto; /* allow scrolling */
`;

/* 2) ButtonWrapper is absolute, so it won't push the logo or any content.
      This mimics your snippet's top stretch, but doesn't fix to the viewport. */
const ButtonWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0; /* Stretches across the container width if you want the same approach */
	z-index: 1; /* On top of background */

	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 16px;
`;

/* 3) LogInButton is EXACTLY the same styling from your snippet */
const LogInButton = styled.a`
	font-weight: 600;
	color: #ffffff;
	background-image: linear-gradient(93.87deg, #095ae6, #062794);
	border: 0 solid;

	width: 110px; /* same width */
	text-align: center;
	font-family: 'Inter', sans-serif;

	font-size: 16px; /* same font size */

	padding: 10px; /* same padding */

	border-radius: 8px;
	line-height: 20px;
	transition: transform 0.2s ease-in-out;
	cursor: pointer;

	margin: 9px 35px 12px 0; /* same margins */

	&:hover {
		transform: scale(1.02);
	}
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

const Description2Title = styled.h2`
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

const Description2 = styled.p`
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

const Description3Title = styled.h2`
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

const Description3 = styled.p`
	font-size: 21px;
	color: #8f98b2;
	font-weight: 500;
	letter-spacing: 0;
	line-height: 24px;
	margin-left: 80px;
	margin-right: 80px;
	margin-top: -12px;
`;

const MoviesAndSeries = styled.img`
	width: 80%;
	margin: 48px auto;
	display: block;
	margin-bottom: 40px;
`;

const Description4Title = styled.h2`
	font-size: 42px;
	font-weight: 600;
	font-family: 'Inter', sans-serif;
	color: #e1e6f0;
	text-align: center;
	letter-spacing: -0.4px;
	line-height: 42px;
	margin-left: 40px;
	margin-right: 40px;
	margin-top: 80px;
`;

const Devices = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0px;
	justify-items: center; /* Ensures each child is centered within its column */
	align-items: flex-start;
	margin: 37px 56px 96px;
	width: 100%;
	max-width: 1200px; /* optional: keeps layout from getting too wide */
	margin-left: auto;
	margin-right: auto;
`;

const TV = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const TVImg = styled.img`
	aspect-ratio: 29/20;
	height: 5rem;
	margin: 0 auto;
`;

const TVDescTitle = styled.h2`
	margin-top: 40px;
	font-family: 'Inter', sans-serif;
	color: #e1e6f0;
	font-size: 20px;
	font-weight: 600;
	line-height: 20px;
`;

const Computer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const ComputerImg = styled.img`
	aspect-ratio: 27/16;
	height: 5rem;
	margin: 0 auto;
`;

const ComputerDescTitle = styled.h2`
	margin-top: 40px;
	font-family: 'Inter', sans-serif;
	color: #e1e6f0;
	font-size: 20px;
	font-weight: 600;
	line-height: 20px;
`;

const Mobile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const MobileImg = styled.img`
	aspect-ratio: 5/8;
	height: 5rem;
	margin: 0 auto;
`;

const MobileDescTitle = styled.h2`
	margin-top: 40px;
	font-family: 'Inter', sans-serif;
	color: #e1e6f0;
	font-size: 20px;
	font-weight: 600;
	line-height: 20px;
`;

const DeviceList = styled.ul`
	list-style: none; /* remove default bullets */
	padding: 0;
	margin-top: 16px;
	font-size: 18px;
	font-family: 'Inter', sans-serif;
	font-weight: 300;
	line-height: 37px;
	color: #8f98b2;
	text-align: center;
`;
