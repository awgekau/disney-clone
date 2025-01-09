import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase';

const Detail = () => {
	const { id } = useParams();
	const [detailData, setDetailData] = useState({});
	const [showVideo, setShowVideo] = useState(false);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchDetailData = async () => {
			const docRef = doc(db, 'movies', id);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setDetailData(docSnap.data());
			} else {
				console.log('No such document in Firestore!');
			}
			setIsLoading(false);
		};

		fetchDetailData();
	}, [id]);

	useEffect(() => {
		let timer;
		if (!showVideo) {
			timer = setTimeout(() => {
				setShowVideo(true);
			}, 3000); // Show video after 3 seconds
		}

		return () => clearTimeout(timer); // Cleanup timer
	}, [showVideo]);

	const handleVideoEnd = () => {
		// After video ends, switch back to the image
		setShowVideo(false);
	};

	return (
		<Container>
			<Background>
				{showVideo && detailData.backgroundVid ? (
					<video
						autoPlay
						muted
						onEnded={handleVideoEnd}
						src={detailData.backgroundVid}
						type="video/mp4"
					/>
				) : (
					<img
						alt={detailData.title}
						src={detailData.backgroundImg}
						loading="lazy"
					/>
				)}
			</Background>

			<ContentMeta>
				<ImageTitle>
					<img alt={detailData.title} src={detailData.titleImg} />
				</ImageTitle>
				<Controls>
					<Player>
						<img src="/images/play-icon-black.png" alt="" />
						<span>Play</span>
					</Player>
					<Trailer>
						<img src="/images/play-icon-white.png" alt="" />
						<span>Trailer</span>
					</Trailer>
				</Controls>
				<SubTitle>{detailData.subTitle}</SubTitle>
				<Description>{detailData.description}</Description>
			</ContentMeta>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
	left: 0px;
	opacity: 0.8;
	position: fixed;
	right: 0px;
	top: 0px;
	z-index: -1;

	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ImageTitle = styled.div`
	align-items: flex-end;
	display: flex;
	-webkit-box-pack: start;
	justify-content: flex-start;
	margin: 0px auto;
	height: 30vw;
	min-height: 170px;
	padding-bottom: 24px;
	width: 100%;

	img {
		max-width: 600px;
		min-width: 200px;
		width: 35vw;
	}
`;

const ContentMeta = styled.div`
	max-width: 874px;
`;

const Controls = styled.div`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	margin: 24px 0px;
	min-height: 56px;
`;

const Player = styled.button`
	font-size: 15px;
	margin: 0px 22px 0px 0px;
	padding: 0px 24px;
	height: 56px;
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 1.8px;
	text-align: center;
	text-transform: uppercase;
	background: rgb(249, 249, 249);
	border: none;
	color: rgb(0, 0, 0);

	img {
		width: 32px;
	}

	&:hover {
		background: rgb(198, 198, 198);
	}

	@media (max-width: 768px) {
		height: 45px;
		padding: 0px 12px;
		font-size: 12px;
		margin: 0px 10px 0px 0px;

		img {
			width: 25px;
		}
	}
`;

const Trailer = styled(Player)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
`;

const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	padding: 16px 0px;
	color: rgb(249, 249, 249);

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

export default Detail;
