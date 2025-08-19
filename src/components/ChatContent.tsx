import Message from './Message';

const ChatContent = () => {
  return (
    <div className='m-2 flex flex-col items-stretch h-[calc(100%-80px)]'>
      <div className='flex-10/12 overflow-scroll'>
        {Array.from({ length: 5 }, () => 'message-slot').map((_, i) => {
          return (
            <>
              <Message />
              {i !== 4 && <hr className='m-5 border-t-1 border-gray-450' />}
            </>
          );
        })}
      </div>
      <div className='flex-2/12 pr-2'>
        <div className='rounded border-gray-450 w-full h-full border-1 flex items-center justify-between'>
          <div className='grayscale contrast-50 text-3xl m-1 hover:contrast-0 hover:shadow'>
            📁
          </div>
          <div className='grayscale contract-50 text-3xl m-1 hover:shadow'>
            ✉
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
