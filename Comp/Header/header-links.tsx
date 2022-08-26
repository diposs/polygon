import {createStyles} from '@mantine/core';
  
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
  
  const data = [
    { link:'/', label: 'Dash', description: 'Item with description' },
    {
      link: '/why',
      label: 'Security',
    },
    { link:'/about', label: 'Activity' },
  ];

  export function HeaderAction() {
    const { classes } = useStyles();
    const items = data.map((item, index) => (
        <a
          key={item.label}
          href={item.link}
          className={classes.link}
        >
          {item.label}
        </a>
      ));

      return <>{items}</>;

  }