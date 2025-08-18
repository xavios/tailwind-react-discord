const ChatList = () => {
  return (
    <div className='flex-1/5 bg-gray-700 flex flex-col text-white'>
      <div className='flex font-bold shadow flex-grow-0 h-12 p-3 items-baseline'>
        <div className='flex-4/5'>Hammer & Chisel</div>
        <div className='felx-1/5 text-xl'>☰</div>
      </div>
      <div className='flex-grow'>
        <h2 className='uppercase p-3 flex justify-between items-baseline'>
          <span>Text channels</span>
          <span className='text-2xl'>+</span>
        </h2>
        <ul>
          <li className='text-white block'>
            <span className='bg-blue-900 w-0.5 mr-2 pt-2 pb-2'>&nbsp;</span>
            <span className='pl-2'>
              <span className='text-gray-500'>#</span> general
            </span>
          </li>
          <li className='pr-1 text-gray-500 pl-4.5 pt-2'># summonners-rift</li>
          <li className='pr-1 text-gray-500 pl-4.5 pt-2'># off-topic</li>
          <li className='pr-1 text-gray-500 pl-4.5 pt-2'># gift-soup</li>
          <li className='pr-1 text-gray-400 pl-4.5 pt-2'># add-ons</li>
        </ul>
        <h2 className='uppercase p-3 flex justify-between items-baseline'>
          <span>Voice channels</span>
          <span className='text-2xl'>+</span>
        </h2>
        <h3 className='p-2 pl-5'>
          <span className='pr-2'>&#9660;</span>Summonners Rift
        </h3>
        <ul className='pl-8 pr-3'>
          <li className='pt-2'>Trion</li>
          <li className='pt-2'>Valaineral</li>
        </ul>
        <h3 className='p-2 pl-5'>
          <span className='pr-2'>&#9660;</span>T13 Raids
        </h3>
        <ul className='pl-8 pr-3'>
          <li className='pt-2 flex justify-between'>
            <span>ArtisticPaw</span>
            <span className='grow-0'>
              <span className='p-1 text-gray-500'>🎙︎</span>
              <span className='p-1'>🎧︎</span>
            </span>
          </li>
          <li className='pt-2'>MysteryIsis</li>
          <li className='pt-2'>PetiteSprite</li>
          <li className='pt-2 flex justify-between'>
            <span>ShiftySaturn</span>
            <span className='grow-0'>
              <span className='p-1'>🎧︎</span>
            </span>
          </li>
        </ul>
      </div>
      <div className='flex flex-grow-0 bg-gray-800 p-3 justify-between'>
        <span>Cherukiki</span>
        <span className='grow-0 hover:cursor-pointer'>
          <ul className='flex text-gray-500 bg-gray-900 rounded'>
            <li className='p-1 border-r-2 w-8 text-center hover:bg-gray-700'>
              🎙︎
            </li>
            <li className='p-1 w-8 text-center hover:bg-gray-700'>🎧︎</li>
            <li className='p-1 border-l-2 w-8 text-center hover:bg-gray-700'>
              ⚙
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default ChatList;
