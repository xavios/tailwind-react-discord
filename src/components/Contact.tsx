const Contact = ({
  name,
  avatar,
  playing,
  online = false,
}: {
  name: string;
  avatar: string;
  playing: string;
  online?: boolean;
}) => {
  return (
    <div className='flex m-3'>
      <div className='grow-0'>
        <img
          src={avatar}
          className={`w-10 h-10 rounded-3xl ${online ? '' : 'grayscale'}`}
        ></img>
        {online && (
          <div className='w-3 h-3 bg-green-900 rounded-3xl relative mt-[-10px] ml-7'></div>
        )}
      </div>
      <div className='flex flex-col ml-2'>
        <div>{name}</div>
        {playing !== '-' && online ? (
          <div className='text-xs'>Playing {playing}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Contact;
