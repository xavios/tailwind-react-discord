const Message = () => {
  const validAvatarIds = [1, 2, 63, 64, 60, 61, 45, 46];
  const avatarId =
    validAvatarIds[Math.floor(Math.random() * validAvatarIds.length)];

  const names = [
    'Kupipi',
    'Mihli Aliapoh',
    'Cherukiki',
    'Curilla',
    'Galadar',
    'Ovjang',
    'Ingrid',
  ];

  const name = names[Math.floor(Math.random() * names.length)];

  const lipsum = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lectus semper, tristique libero vitae, accumsan nisl. Ut bibendum libero sed dui dictum, at vestibulum elit congue. Nunc eget risus eget mauris cursus lobortis. Maecenas ut convallis sem. Suspendisse laoreet ante at risus malesuada, eget rhoncus enim vulputate. In sagittis ex non diam consequat porttitor. Donec vitae faucibus turpis. Ut aliquam, sapien ut lacinia finibus, dui ante commodo dui, eu ultrices arcu felis id purus. Maecenas mattis magna sed lacus commodo, ut pellentesque urna pellentesque. Suspendisse maximus magna eu arcu consectetur, eu finibus felis finibus. Fusce augue nisl, commodo sit amet odio eget, pellentesque laoreet urna. Mauris leo eros, ornare nec ultricies euismod, mollis eget lectus. Aliquam tincidunt nisl eu dolor pretium condimentum.',
    'Curabitur at libero sapien. Duis eget porta tortor, vitae dictum mi. Vestibulum iaculis sapien sed convallis pulvinar. Vivamus consectetur turpis a lorem faucibus, nec congue ex tristique. Ut sit amet mauris volutpat, rhoncus eros vitae, consectetur magna. Nulla sed velit vel est sodales dictum non sed purus. Nunc lobortis vel justo ac luctus. Pellentesque congue condimentum libero, id consectetur sapien. Ut pharetra id tortor at consequat. Quisque vulputate imperdiet felis suscipit lobortis.',
    'Donec ullamcorper sodales augue, id viverra sem efficitur non. Suspendisse ac lectus et nunc placerat aliquet. Sed sit amet orci nibh. Cras et velit tincidunt, mollis enim eget, sodales quam. Donec eget tempus lectus. Mauris posuere, leo ut eleifend laoreet, risus elit ultrices augue, non facilisis eros orci iaculis dui. Donec volutpat elementum purus ut tincidunt. Proin at diam egestas, posuere mi eu, vulputate metus. Integer non erat ornare, fermentum velit aliquet, pulvinar elit. Mauris neque sapien, interdum vel ante ut, eleifend sagittis quam. Phasellus sed erat lacinia, tincidunt justo ut, dictum turpis. Sed sed nibh nec dolor lacinia rhoncus et sed tellus. In tincidunt pellentesque justo, eu rutrum mauris. Praesent suscipit vel dui vitae pretium.',
    'Nullam ac orci nisl. Vivamus nulla turpis, scelerisque egestas nisi in, scelerisque aliquet urna. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vehicula arcu lacus, in sagittis arcu mattis vulputate. Nullam at hendrerit nibh. Donec non aliquet est, at hendrerit leo. Mauris quis magna vestibulum, suscipit elit eget, finibus ligula. Maecenas auctor gravida risus ullamcorper commodo. Donec molestie fermentum urna, dictum fermentum sapien porttitor et. Vivamus tortor ex, ornare varius gravida sed, semper blandit lorem. Nunc elit eros, commodo non condimentum id, vulputate sed lacus.',
    'Sed id consequat felis. Proin lacinia aliquam dignissim. In hac habitasse platea dictumst. Fusce id enim turpis. Nunc mi dolor, tincidunt ut diam non, pretium ornare neque. Fusce ullamcorper tincidunt augue, ut fermentum urna aliquet nec. Quisque et facilisis orci, et eleifend mi. Donec viverra congue turpis, nec lobortis neque efficitur eget. Sed auctor nisl est, non molestie quam vestibulum a. Proin non iaculis ligula.',
  ];

  const message = lipsum[Math.floor(Math.random() * 5)];

  return (
    <div className='flex m-3'>
      <img
        src={`https://i.pravatar.cc/150?img=${avatarId}`}
        className='w-10 h-10 rounded-3xl grow-0 m-3'
      ></img>
      <div>
        <div className='font-semibold'>
          {name}{' '}
          <span className='text-gray-450 text-xs'>
            {new Date().toISOString()}
          </span>
        </div>
        <div className='text-sm mr-5'>{message}</div>
      </div>
    </div>
  );
};

export default Message;
