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
  import {HeaderAction} from './header-links'


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
  
    burger: {
      [theme.fn.largerThan('sm')]: {
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
  
  export function Headings() {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    return (
        
      <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
        <Container className={classes.inner} fluid>
          <Group>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            Rahlin
          </Group>
          <Group spacing={5} className={classes.links}>
            <HeaderAction />
          </Group>
          <Button radius="xl" sx={{ height: 30 }}>
            Get early access
          </Button>
        </Container>
      </Header>
    );
  }