import { useState } from "react";
import styled from "styled-components";
import { Body } from "./styles/GlobalStyles";
import { GiClick } from "react-icons/gi";

interface Quote {
  author: string;
  quote: string;
}

const App = () => {
  const [quote, SetQoute] = useState<Quote>();
  const handleClick = async () => {
    const response = await fetch("http://192.168.1.13:3000/quotes/generate");
    const json = await response.json();
    if (response.ok) {
      SetQoute(json);
    }
  };

  return (
    <Wrapper>
      <h1>Quote Generator </h1>
      <button onClick={handleClick}>
        <GiClick />
        Generate
      </button>
      {quote && (
        <div className="holder">
          <p className="quotes">{quote.quote}</p>
          <p className="author">-{quote.author}</p>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Body)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-family: sans-serif;
  padding: 25px 0px;

  .holder {
    padding: 50px 0px;
    width: 85vw;
    display: flex;
    gap: 10px;
    flex-direction: column;
    .quotes {
      font-size: 1.3rem;
      font-family: sans-serif
      font-style: italic;
      text-align: center;
    }
    .author {
      font-size: 1rem;
      font-family: cursive;
      font-style: italic;
      display: flex;
      justify-content: flex-end;
    }
  }
  button {
    display: flex;
    gap: 5px;
    place-content: center;
    place-items: center;
    padding: 5px;
    background-color: #4f4674;
    border: none;
    border-radius: 5px;
    min-width: 200px;
    font-size: 1rem;
    font-family: sans-serif;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 700;
    color: white;
    transition: 200ms ease;
    &:active {
      background-color: #706891;
    }
    @media (hover) {
      &:hover {
        background-color: #706891;
      }
    }
  }
`;

export default App;
