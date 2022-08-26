import {createStyles} from '@mantine/core';
import useStyles from './header.styles'

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