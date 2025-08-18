const ChatWindow = () => {
  return (
    <div className='flex-4/5 bg-white flex flex-col'>
      <div className='pl-8 pt-4 pb-4 pr-8 text-xl shadow font-bold'>
        <span className='text-gray-500'>#</span>general
      </div>
      <div className='flex items-stretch h-full'>
        <div className='flex-4/5'>main content</div>
        <div className='flex-1/5 bg-gray-200'>now online</div>
      </div>
    </div>
  );
};

export default ChatWindow;
