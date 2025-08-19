import Contact from './Contact';

type Player = {
  name: string;
  avatar: string;
  playing: string;
};

const ContactList = () => {
  const onlineContacts: Player[] = [
    {
      name: 'Kupipi',
      avatar: 'https://i.pravatar.cc/150?img=1',
      playing: 'Final Fanatasy V',
    },

    {
      name: 'Mihli Aliapoh',
      avatar: 'https://i.pravatar.cc/150?img=63',
      playing: 'Final Fanatasy V',
    },
    {
      name: 'Cherukiki',
      avatar: 'https://i.pravatar.cc/150?img=60',
      playing: 'League of Legends',
    },
    {
      name: 'Curilla',
      avatar: 'https://i.pravatar.cc/150?img=45',
      playing: '-',
    },
  ];

  const offlineContacts: Player[] = [
    {
      name: 'Galadar',
      avatar: 'https://i.pravatar.cc/150?img=2',
      playing: 'Final Fanatasy V',
    },

    {
      name: 'Ovjang',
      avatar: 'https://i.pravatar.cc/150?img=64',
      playing: 'Final Fanatasy V',
    },
    {
      name: 'Ingrid',
      avatar: 'https://i.pravatar.cc/150?img=61',
      playing: 'League of Legends',
    },
    {
      name: 'Rahal',
      avatar: 'https://i.pravatar.cc/150?img=46',
      playing: '-',
    },
    {
      name: 'Trion',
      avatar: 'https://i.pravatar.cc/150?img=47',
      playing: '-',
    },
  ];
  return (
    <div>
      <h2 className='m-3 font-bold text-xl'>Online</h2>
      {onlineContacts.map((contact) => (
        <Contact {...contact} online={true} />
      ))}
      <h2 className='m-3 font-bold text-xl'>Offline</h2>
      {offlineContacts.map((contact) => (
        <Contact {...contact} online={false} />
      ))}
    </div>
  );
};

export default ContactList;
