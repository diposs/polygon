import {
    Header,
    Container,
    Group,
    Button,
    Burger,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import {HeaderAction} from './header-links'
  import useStyles from './header.styles'
  import Demo from "./test";
  import Wallet from "./wallet/Wallet"


  
  
  export function Headings() {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    return (
        
      <Header height={60} sx={{ borderBottom: 0 }} mb={120}>
        <Container className={classes.inner} fluid>
          <Group>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            Rahlin
          </Group>
          <Group spacing={5} className={classes.links}>
            <HeaderAction />
          </Group>
          <Demo />
          <Wallet />
        </Container>
      </Header>
    );
  }
