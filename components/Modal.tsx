// unused?
import styled from "styled-components";

const ModalComponent = styled.div`
  .overlay {
    background: rgba(0, 0, 0, 0.75);
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 50;
    transition: ease 0.1s;
  }
  .modal {
    background: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.25);
    width: 50vw;
    height: 50vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ease 0.1s;
  }
  .btn {
    background: rgb(0, 174, 255);
    color: #fff;
  }
`;

export default function Modal() {
  return (
    <>
      <ModalComponent v-if="myStatus === 'on'">
        <div className="overlay"></div>
        <div className="modal">
          <a href="#" className="btn">
            text
          </a>
        </div>
      </ModalComponent>
    </>
  );
}
