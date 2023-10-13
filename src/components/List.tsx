import Avatar from 'antd/es/avatar/avatar';

const exampleList = [
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Niklas', last: 'Kumpula' },
    email: 'niklas.kumpula@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/32.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/32.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/32.jpg',
    },
    nat: 'FI',
  },
  {
    gender: 'female',
    name: { title: 'Ms', first: 'Mary', last: 'Thompson' },
    email: 'mary.thompson@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/84.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/84.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/84.jpg',
    },
    nat: 'AU',
  },
  {
    gender: 'female',
    name: { title: 'Miss', first: 'Ylva', last: 'Årseth' },
    email: 'ylva.arseth@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/19.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/19.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/19.jpg',
    },
    nat: 'NO',
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Ryan', last: 'Holmes' },
    email: 'ryan.holmes@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/0.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/0.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/0.jpg',
    },
    nat: 'AU',
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Cohen', last: 'Edwards' },
    email: 'cohen.edwards@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/51.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/51.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/51.jpg',
    },
    nat: 'NZ',
  },
  {
    gender: 'female',
    name: { title: 'Ms', first: 'Iva', last: 'Heijerman' },
    email: 'iva.heijerman@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/50.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/50.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/50.jpg',
    },
    nat: 'NL',
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Kurt', last: 'Caldwell' },
    email: 'kurt.caldwell@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/12.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/12.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/12.jpg',
    },
    nat: 'IE',
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'Efe', last: 'Kaya' },
    email: 'efe.kaya@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/66.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/66.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/66.jpg',
    },
    nat: 'TR',
  },
  {
    gender: 'male',
    name: { title: 'Mr', first: 'کوروش', last: 'نكو نظر' },
    email: 'khwrwsh.nkwnzr@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/12.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/12.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/12.jpg',
    },
    nat: 'IR',
  },
  {
    gender: 'female',
    name: { title: 'Ms', first: 'Sarah', last: 'Baker' },
    email: 'sarah.baker@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/21.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
    nat: 'US',
  },
];

const List = () => {
  return (
    <div className="h-full w-full overflow-auto no-scrollbar bg-background">
      <ul className="flex flex-wrap flex-col gap-2">
        {exampleList.map((item) => {
          const { email, name, picture } = item;
          return (
            <li
              className="flex flex-wrap items-center p-1 px-4 rounded gap-4 border-2 border-primary min-w-fit"
              key={email}
            >
              <Avatar src={picture.large} />
              <div className="flex flex-col">
                <h1 className="font-mono text-primary">{name.first}</h1>
                <h4 className="opacity-50 text-sm">{email}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
