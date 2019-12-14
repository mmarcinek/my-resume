import developer from './developer';
import photographer from './photographer';
import explorer from './explorer';
import contact from './contact';

export default [
    {
      action: 'dev',
      display: 'Developer',
      ...developer,
    },
    {
      action: 'photo',
      display: 'Photographer',
      ...photographer,
    },
    {
      action: 'exp',
      display: 'Explorer',
      ...explorer,
    },
    {
      action: 'cont',
      display: 'Contact',
      ...contact,
    },
    {
      action: 'resume',
      display: 'Resume',
    },
]
