import { useState } from "react";
import {
  Modal,
  Button,
  createStyles,
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
} from "@mantine/core";
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
import LoginButton from "../buttons";
import { EthereumButton } from "../buttons/functions";

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

function Demo() {
  const [opened, setOpened] = useState(false);
  const { classes, theme } = useStyles();

  // const items = mockdata.map((item) => (
  //   // <LoginButton>

  //   // </LoginButton>
  //   // <UnstyledButton key={item.title} className={classes.item}>
  //   //   <item.icon color={theme.colors[item.color][6]} size={32} />
  //   //   <Text size="xs" mt={7}>
  //   //     {item.title}
  //   //   </Text>
  //   // </UnstyledButton>
  // ));

  return (
    <>
      <Modal
        centered
        withCloseButton={false}
        styles={{ header: { marginBottom: "auto" } }}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Card withBorder radius="md" className={classes.card}>
          <Group position="apart">
            <Text className={classes.title}>Services</Text>
          </Group>
          <SimpleGrid cols={3} mt="md">
            <LoginButton
              name="Ethereum"
              onClick={EthereumButton}
              icon={<IconCreditCard color="violet" size={32} />}
            />
            <LoginButton
              name="Ethereum"
              onClick={EthereumButton}
              icon={<IconCreditCard color="violet" size={32} />}
            />
            {/* <IconCreditCard  /> */}
            {/* <LoginButton name={} onClick={} />
            <LoginButton name={} onClick={} />
            <LoginButton name={} onClick={} />
            <LoginButton name={} onClick={} />
            <LoginButton name={} onClick={} />
            <LoginButton name={} onClick={} /> */}
          </SimpleGrid>
        </Card>
      </Modal>

      <Button radius="xl" sx={{ height: 30 }} onClick={() => setOpened(true)}>
        Get Early Access
      </Button>
    </>
  );
}
export default Demo;
