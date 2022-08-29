import { createStyles, Text, UnstyledButton } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));

type LoginButtonProps = {
  name: string;
  onClick: React.MouseEventHandler;
  icon: JSX.Element;
};

const LoginButton = ({ name, onClick, icon }: LoginButtonProps) => {
  const { classes, theme } = useStyles();
  return (
    <UnstyledButton name={name} onClick={onClick} className={classes.item}>
      {icon}
      <Text size="xs" mt={7}>
        {name}
      </Text>
    </UnstyledButton>
  );
};

export default LoginButton;
