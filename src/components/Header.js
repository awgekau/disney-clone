import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import {
	selectUserName,
	selectUserPhoto,
	setUserLoginDetails,
	setSignOutState,
} from '../features/users/userSlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Grab these from Redux
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	// Watch for changes to the Firebase Auth user
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			if (user) {
				setUser(user);
				// If user logs in, redirect to /home
				navigate('/home');
			}
		});
		return () => unsubscribe();
	}, [userName, navigate]);

	const setUser = (user) => {
		dispatch(
			setUserLoginDetails({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL,
			})
		);
	};

	// Called when user clicks "Sign Out"
	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				dispatch(setSignOutState());
				navigate('/');
			})
			.catch((err) => alert(err.message));
	};

	return (
		<Nav>
			<Logo>
				<img src="/images/logo.svg" alt="Disney+" />
			</Logo>

			<NavMenu>
				<a href="/home">
					<img src="/images/home-icon.svg" alt="HOME" />
					<span>HOME</span>
				</a>
				<a>
					<img src="/images/search-icon.svg" alt="SEARCH" />
					<span>SEARCH</span>
				</a>
				<a>
					<img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
					<span>WATCHLIST</span>
				</a>
				<a>
					<img src="/images/original-icon.svg" alt="ORIGINALS" />
					<span>ORIGINALS</span>
				</a>
				<a>
					<img src="/images/movie-icon.svg" alt="MOVIES" />
					<span>MOVIES</span>
				</a>
				<a>
					<img src="/images/series-icon.svg" alt="SERIES" />
					<span>SERIES</span>
				</a>
			</NavMenu>

			<SignOut>
				<UserContainer>
					<UserImg
						src={userPhoto ? userPhoto : '/images/default-profile.png'}
						alt={userName || 'User'}
					/>
					<UserName>{userName || 'Guest'}</UserName>
				</UserContainer>
				<DropDown>
					<span onClick={handleSignOut}>Sign out</span>
				</DropDown>
			</SignOut>
		</Nav>
	);
};

export default Header;

/* --- Styled components --- */

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: #090b13;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 3;
`;

const Logo = styled.a`
	width: 80px;
	margin-top: 4px;
	max-height: 70px;

	img {
		display: block;
		width: 100%;
	}
`;

const NavMenu = styled.div`
	align-items: center;
	display: flex;
	margin-left: 25px;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;

		img {
			height: 20px;
			width: 20px;
		}

		span {
			color: rgb(249, 249, 249);
			font-size: 13px;
			letter-spacing: 1.42px;
			padding: 2px 0px;
			position: relative;
		}
	}
`;

const SignOut = styled.div`
	position: relative;
	height: 48px;
	width: 48px;
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: center;

	&:hover > div {
		opacity: 1;
		transition-duration: 1s;
	}
`;

const UserContainer = styled.div`
	display: flex;
	align-items: center;
	margin-right: 12px;
`;

const UserImg = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	margin-right: 8px;
`;

const UserName = styled.span`
	color: #ffffff;
	font-size: 14px;
	font-weight: bold;
	letter-spacing: 1px;
`;

const DropDown = styled.div`
	position: absolute;
	top: 48px;
	right: 0;
	background: rgb(19, 19, 19);
	border: 1px solid rgb(151 151 151 / 34%);
	border-radius: 4px;
	padding: 10px;
	font-size: 14px;
	letter-spacing: 3px;
	width: 100px;
	opacity: 0;
`;
