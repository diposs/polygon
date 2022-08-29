import { ClassNames } from "@emotion/react";
import { createStyles, Text, UnstyledButton } from "@mantine/core";

import {
  IconCreditCard,
  IconBuildingBank,
  IconRepeat,
  IconReceiptRefund,
  IconReceipt,
  IconReceiptTax,
  IconReport,
  IconCashBanknote,
  IconCoin,
} from "@tabler/icons";

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


const buttons = [
  { title: "Ethereum", icon: IconCreditCard, color: "violet" },
  { title: "Polygon", icon: IconBuildingBank, color: "indigo" },
  { title: "BSC", icon: IconRepeat, color: "blue" },
  { title: "Optimism", icon: IconReceiptRefund, color: "green" },
  { title: "Oasis (Emerald)", icon: IconReceipt, color: "teal" },
  { title: "Aurora", icon: IconReceiptTax, color: "cyan" },
  { title: "Avax C-Chain", icon: IconReport, color: "pink" },
  { title: "Near", icon: IconCoin, color: "red" },
  { title: "Cosmos", icon: IconCashBanknote, color: "orange" },
];

type LoginButtonProps = {
    name: string,
    onClick: string,
    icon: JSX.Element
}

const LoginButton = ({ name, onClick, icon }: LoginButtonProps) => {
  const { classes, theme } = useStyles();
  return (
    <UnstyledButton
      name={name}
      onClick={onClick}
      className={classes.item}
    //   icon={icons.icon}
    >
        {icon}
      {/* <>{Icon.map(icon => (<div ={icon.name} />)} */}
      {/* <Icon.icons color={theme.colors[color][6]} size={32} /> */}
      <Text size="xs" mt={7}>
        {name}
      </Text>
    </UnstyledButton>
  );
};

const Button = () => {
  return <div></div>;
};

export default LoginButton;
