import styled from "@emotion/styled";
import LogoImg from "../assets/img/logo.svg";

const FooterComponent = styled.footer`
  max-width: 780px;
  margin-top: 48px;
  margin-bottom: 48px;

  .logo {
    width: 200px;
    max-width: 240px;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    margin: 0;
    line-height: 1.75;
    letter-spacing: 3px;

    a {
      color: inherit;
      text-decoration: none;
      transition: ease 0.1s;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export default function Footer() {
  return <></>;
}
