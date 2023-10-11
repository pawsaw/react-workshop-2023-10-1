export interface User {
  id: string;
  first: string;
  last: string;
  // ...
}

const users: User[] = [
  // O(n) - Lena
  {
    id: '1',
    first: 'Max',
    last: 'Mustermann',
  },
  {
    id: '2',
    first: 'Lena',
    last: 'Musterfrau',
  },
];

const normalized: { [id: string]: User } = {
  '1': {
    id: '1',
    first: 'Max',
    last: 'Mustermann',
  },
  '2': {
    id: '2',
    first: 'Lena',
    last: 'Musterfrau',
  },
};

const finalUsers = {
  data: {
    '1': {
      id: '1',
      first: 'Max',
      last: 'Mustermann',
    },
    '2': {
      id: '2',
      first: 'Lena',
      last: 'Musterfrau',
    },
  },
  order: ['1', '2'],
};

Object.values(normalized);

users.reduce((acc, user) => {
  return {
    ...acc,
    [user.id]: user,
  };
}, {});
