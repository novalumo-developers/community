// next
import Link from "next/link";
// styled
import styled from "styled-components";

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 30;
  position: fixed;
  top: 0;
  width: 100%;
  transition: ease 0.2s;

  .logo {
    color: inherit;
    font-size: 1.8rem;
    margin: 0 0 0 4px;
    text-decoration: none;
    transition: ease 0.1s;
    &:hover {
      opacity: 0.5;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    letter-spacing: 1px;

    a {
      margin: 0 0 0 1rem;
      color: inherit;
      text-decoration: none;
      transition: ease 0.1s;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderComponent>
      <div>
        <Link href="/">
          <a className="logo">Developers</a>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <a
              href="https://github.com/novalumo-developers"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </HeaderComponent>
  );
}
