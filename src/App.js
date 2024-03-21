import './App.css';
import InputTagComponent from './InputTagComponent';
import Main from './component/Main';
import Qr from './qrcode/Qr';
import DemoTodo from './useReducer/DemoTodo';
import InputText from './useReducer/TaskReducer/InputText';
import UseRef from './useRef/UseRef';
import EncrptDecrypt from "./encrypt-decrypt/EncrptDecrypt";
import File from './chooseFile/File';


function App() {
  return (
    <>
    {/* <Main/> */}
    {/* <InputTagComponent/>  <------- sample file from chat gpt */}
    {/* <DemoTodo/>   <------------sample file from w3school*/}
    {/* <InputText/> */}
    {/* <Qr/> */}
    {/* <UseRef/> */}
    {/* <EncrptDecrypt/> */}
    <File/>
    </>
  );
}

export default App;