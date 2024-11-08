import Link from "next/link";
import styled from "@emotion/styled";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar>
        <NavItem>
          <Link href="/fortunedog">Fortune Dog</Link>
        </NavItem>
        <NavItem>
          <Link href="/calculator">Calculator</Link>
        </NavItem>
      </NavBar>

      <MainContent>{children}</MainContent>
    </>
  );
}

// 스타일 정의
const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #007aff;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const NavItem = styled.div`
  margin: 0 20px;
  font-size: 1.2em;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
      color: #005bb5;
    }
  }

  @media (max-width: 480px) {
    font-size: 1em;
    margin: 0 12px;
  }
`;

const MainContent = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 480px) {
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  p {
    font-size: 1em;
    color: #6e6e73;
  }
`;
