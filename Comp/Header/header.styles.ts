import { createStyles } from '@mantine/core';

const HEADER_HEIGHT = 60;

export default createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    
      links: {
        [theme.fn.smallerThan('sm')]: {
          display: 'none',
        },
      },
    
      burger: {
        [theme.fn.largerThan('sm')]: {
          display: 'none',
        },
      },
}));
