import styled from "styled-components";

const SecondaryButton = styled.button`
  background-color: #1e1e24;
  font-size: 1.125rem;
  letter-spacing: 0.02em;
  line-height: 0.85;
  color: #fff;
  border: none;
  border-radius: 7px;
  min-width: 6rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #ffffff;
    color: #1e1e24;
  }
`;

export default SecondaryButton;
