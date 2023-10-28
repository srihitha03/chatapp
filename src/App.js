
import { useState } from 'react';
import './App.css';
// import { CgProfile } from "react-icons/go";
import ChatBox from './chatBox';

function App() {
  const [chatName, setChatName] = useState('Srihitha');
  const clickName = (item) => {
    console.log(item.target.innerText, '11')
     setChatName(item.target.innerText);
  }
  const personData = [
    "Vijay",
    "Srihitha",
    "Shiva",
    "Arjun"
  ]

  return (
    <div className="App">
      <div className='navBar'>CHAT APPLICATION</div>
      <div className='main-container'>
        <div className='container'>
          <div className='icon-container'>
            <div className="parent">
              <div className='head'></div>
              <div className="body"></div>
            </div>
          </div>


          <div className='personList'>
            {personData.map((item) => {
              return (
                <p onClick={clickName}>{item}</p>
              )
            })}

          </div>

        </div>
        <div className='chatBox'>
            <ChatBox onClickinParent="clickName" data={chatName} />
        </div>
      </div>

    </div>
  );
}

export default App;
