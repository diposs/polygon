import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import { IconChevronDown } from '@tabler/icons';
  
  const HEADER_HEIGHT = 60;
  
  const useStyles = createStyles((theme) => ({
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
  
    link: {
      display: 'block',
      lineHeight: 1,
      padding: '8px 12px',
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    },
  
    linkLabel: {
      marginRight: 5,
    },
  }));
  

  export function HeaderAction() {
    const { classes } = useStyles();
  
      return (
        <>
        <a
          key='home'
          href='/'
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          hhhh
        </a>
        <a
          key='about'
          href='/about'
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
        hhha
        </a>
        </>
      );

  }