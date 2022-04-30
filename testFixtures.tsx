import { Clinician } from './src/interfaces';

export const createClinician = (overrides: Partial<Clinician> = {}): Clinician => ({
  bio: 'Molestiae occaecati adipisci autem enim. Eos porro totam ducimus temporibus est commodi quis. Doloremque pariatur ducimus voluptatem non amet perferendis cupiditate nemo.\n \nMaxime consectetur reprehenderit fugit officia dolorem. Et unde assumenda. Aut et voluptates impedit explicabo. Earum expedita sit aut neque quas.\n \nTotam voluptas pariatur. Dolores repellendus nihil. Qui quasi doloremque omnis vitae ab provident rerum.\n \nMolestiae aut delectus accusantium. Beatae nihil eaque at. Earum quaerat rerum ea. Reiciendis eaque molestiae iusto excepturi dolorem. Eum iure quo cumque omnis tenetur dolores at. Atque suscipit vitae enim dicta.\n \nQuae sed saepe. Et sunt voluptatum quo quis explicabo suscipit soluta. Est culpa quia non omnis rerum eveniet sit aperiam et. Aut nihil ducimus ipsum molestiae est. Voluptatem consequatur harum id et. Tempore aut voluptate molestias dolorem doloribus voluptatibus facere quis.',
  email: 'Aaron_Renner6@mobile.platform.interview',
  firstName: 'Aaron',
  fullName: 'Aaron Renner',
  id: '8ca66f49-0f86-4a87-96b0-23b41b9f8956',
  imageUrl: 'https://placeimg.com/640/480/animals',
  lastName: 'Renner',
  location: '["42.1018","-74.5025"]',
  phone: '555-209-588',
  ...overrides,
});
