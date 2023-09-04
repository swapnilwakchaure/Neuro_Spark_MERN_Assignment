import { useState } from "react";
import "../Styles/styles.css";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { emailValidation, nameValidation, numberValidation } from "../Components/validation";


const CreateEvent = () => {

  // add to list form handling values are here using hooks;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  // check input values are valid or invalid;

  const nameStrength = nameValidation(name);
  const emailStrength = emailValidation(email);
  const noStrength = numberValidation(number);

  // get the values and submit the form and post the data;

  const handleAddToList = (e) => {
    e.preventDefault();

    if (nameStrength === 'valid' && emailStrength === 'valid' && noStrength === 'valid' && date) {
      const payload = { name, email, number: Number(number), date };
      console.log('payload: ', payload);

      setName('');
      setEmail('');
      setNumber('');
      setDate('');
    } else {
      alert('please enter valid details');
    }
  }

  // set modal using hooks;

  const [modal, setModal] = useState(false);

  // open modal form and close modal form 
  const toggleModal = () => {
    setModal(!modal);
  }

  // modal conditions to active

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <Main>
      <div>
        <Title>Title of the Event</Title>

        <div></div>

        <ButtonBox>
          <Button
            width="100%"
            backcolor="#80D8FF"
            onClick={toggleModal}
          >
            Add
          </Button>
          <Button
            width="100%"
            backcolor="#A7FFEB"
          >
            Save
          </Button>
        </ButtonBox>
      </div>

      {modal && <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>

        <Form className="modal-content" onSubmit={handleAddToList}>

          <Close>
            <CgClose onClick={toggleModal} />
          </Close>

          <div className="inputBox">
            <input
              className="input"
              autoFocus
              type="text"
              minLength="3"
              maxLength="100"
              required="required"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="placeholder">Full Name</span>
            <Message>{nameStrength !== 'valid' && name.length > 1 && nameStrength}</Message>
          </div>

          <div className="inputBox">
            <DOB>Date of birth (between 2000 to 2022 year only)</DOB>
            <input
              className="input"
              type="date"
              min="2000-01-01"
              max="2022-12-31"
              required="required"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="inputBox">
            <input
              className="input"
              type="email"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="placeholder">Email</span>
            <Message>{emailStrength !== 'valid' && email.length > 2 && emailStrength}</Message>
          </div>

          <div className="inputBox">
            <input
              className="input"
              type="text"
              required="required"
              minLength="10"
              maxLength="10"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <span className="placeholder">Contact</span>
            <Message>{noStrength !== 'valid' && number.length > 1 && noStrength}</Message>
          </div>

          <Button width="90%" backcolor="#80D8FF">Add To List</Button>
        </Form>
      </div>
      }

    </Main>
  )
}

export default CreateEvent;




// styling starts from here

const Main = styled.div`
  width: 90%;
  max-width: 410px;
  margin: 30px auto;
`

const Title = styled.p`
  width: 100%;
  padding: 5px 0px;
  border: 2px solid;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #0091EA;
  letter-spacing: 1.5px;

  &: hover {
    background: #A7FFEB;
    transition: 0.3s;
  }
`


const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  width: ${(props) => props.width};
  margin: 5px;
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid;
  border-radius: 10px;
  background: none;
  cursor: pointer;
  
  &: hover {
    background: ${(props) => props.backcolor};
    color: #fff;
    transition: 0.3s;
  }
`










// modal form or add to list form styling here

const Form = styled.form`
  width: 90%;
  max-width: 410px;
  margin: auto;
  padding: 5px 5px 15px 5px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f1f1f1;
`

const Close = styled.div`
  position: absolute;
  right: 1.5%;
  top: 0.5%;
  border: 1px solid;
  border-radius: 10px;
  margin: 2px;
  padding: 2px;
  cursor: pointer;

  &: hover {
    background: black;
    color: white;
  }
`

const DOB = styled.p`
  text-align: start;
  margin: 0px 0px 4px 0px;
  font-size: 14px;
  color: #0672cb;
  font-weight: 300;
`


const Message = styled.p`
  text-align: start;
  margin: 5px;
  font-size: 14px;
  font-style: Italic;
  font-weight: 300;
  color: red;
`
