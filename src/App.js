import logo from './logo.svg';
import React, { Component,useState } from 'react';
import './App.css';
import logoIcon from './a3ilogo.png';

// function App() {
//   return (
//     <div className="App">
//       <h3>Choose URL</h3>
//       <div>
//         <button> Record </button>
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      <AutomationForm/>
    </div>
  );
}

export default App;


// class AutomationForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ''
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('An essay was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className="login">
//       <h4>A3I</h4>
//       {/* <form onSubmit={this.handleSubmit}> */}
//       <div>
//         <div className="marginal">
//         <label >
//         Url :
//         <input type="text" name="name" />
//         </label>
//         </div>
//         <div className="marginal">
//         <label>
//           JIRA:
//           <input type="text" name="Jira" />
//           {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
//         </label>
//         </div>
//         <div className="marginal">
//         <RecordButton />
//         </div>
//         <input
//           type="submit"
//           value="Get Report"
//           className="btn"
//         />
//         </div>
//       {/* </form> */}
//       {/* <h1>Embed ChatGPT in an HTML Page</h1> */}
//       {/* <iframe src="https://chatgpt.com/g/g-wiqLsI5s3-playwright/"></iframe> */}
//       {/* <div>
//         <object type="text/html" data="https://chatgpt.com/g/g-wiqLsI5s3-playwright" width="800px" height="600px"></object>
//        </div> */}
//       {/* <a className="link" href="/signup">Note:</a> */}
//     </div>
//     );
//   }
// }


const AutomationForm = () => {
  const [value, setValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const handleChange = (event) => {
      setValue(event.target.value);
  }

  const handleSubmit = (event) => {
      alert('An essay was submitted: ' + value);
      event.preventDefault();
  }

  const handleButtonClick = () => {
    if (isRecording) {
        stopRecording();
    } else {
        startRecording();
    }
};

const startRecording = () => {
    setIsRecording(true);
    console.log('Recording started');
    // Add your recording logic here
};

const stopRecording = () => {
    setIsRecording(false);
    setShowReport(true);
    console.log('Recording stopped');
    // Add your recording stopping logic here
};

  return (
      <div className="login">
          {/* <h4>A3I</h4> */}
          <img src={logoIcon} width="50" height="50"/>
          {/* <form onSubmit={handleSubmit}> */}
          <div>
              <div className="marginal">
                      Url :
                      <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="textinput-width"
                      />
              </div>
              <div className="marginal">
                      JIRA:
                      <input
                          type="text"
                          name="Jira"
                          onChange={handleChange}
                          className="textinput-width"
                      />
              </div>
              <div className="marginal">
              <button 
              onClick={handleButtonClick} 
              className={`record-button ${isRecording ? 'recording' : ''}`}>
              {isRecording ? 'Stop Recording' : 'Start Recording'}
              </button>
              </div>
              <input
                  type="submit"
                  value="Get Report"
                  className="btn"
                  onClick={handleSubmit}
                  hidden={!showReport}
              />
          </div>
      </div>
  );
}


// export default RecordButton;
