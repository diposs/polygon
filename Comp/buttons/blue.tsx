import { createStyles, Text, UnstyledButton } from "@mantine/core"
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
} from '@tabler/icons';
import useMetaMask from "../../modules/hooks/useMetaMask";

function tester() {
alert('ss Button')
}
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


export const ReceiveIconButton = () => {
const { classes, theme } = useStyles();
const { connect } = useMetaMask()??{}
    return (
      <>
       <UnstyledButton onClick={connect} className={classes.item}>
      <IconCreditCard color={theme.colors['indigo'][6]} size={32} />
      <Text size="xs" mt={7}>
        Polygon
      </Text>
    </UnstyledButton>
</>
    );
};
