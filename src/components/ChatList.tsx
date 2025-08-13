const ChatList = () => {
  return (
    <div className='flex-1/5 bg-gray-700 flex flex-col text-white'>
      <div className='flex font-bold shadow flex-grow-0 h-12 p-3 items-baseline'>
        <div className='flex-4/5'>Hammer & Chisel</div>
        <div className='felx-1/5 text-xl'>☰</div>
      </div>
      <div className='flex-grow p-3'>
        <h2>Text channels</h2>
        <ul>
          <li># general</li>
          <li># summonners-rift</li>
          <li># off-topic</li>
          <li># gift-soup</li>
          <li># add-ons</li>
        </ul>
        <h2>Voice channels</h2>
      </div>
      <div className='flex-grow-0 bg-gray-800 p-3'>Cherukiki</div>
    </div>
  );
};

export default ChatList;
