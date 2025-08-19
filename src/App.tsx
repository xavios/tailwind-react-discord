import './App.css';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='overflow-hidden'>
      <div className='flex flex-row flex-nowrap'>
        <NavBar></NavBar>
        <div className='flex-auto flex'>
          <ChatList></ChatList>
          <ChatWindow></ChatWindow>
        </div>
      </div>
    </div>
  );
}

export default App;
