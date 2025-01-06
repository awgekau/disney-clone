import styled from 'styled-components';

const Header = (props) => {
	return (
		<Nav>

		</Nav>
	);
};

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 16px;
`;


export default Header;
