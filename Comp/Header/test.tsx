import { useState } from "react";
import {
  Modal,
  Button,
  createStyles,
  Card,
  Text,
  SimpleGrid,
  Anchor,
  Group,
} from "@mantine/core";

import LoginButton from "../buttons";
import { ReceiveIconButton } from "../buttons/blue";
import Wallet from "./wallet/Wallet";

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
              <ReceiveIconButton />
            <ReceiveIconButton />
            <ReceiveIconButton />
            <ReceiveIconButton />
            <ReceiveIconButton />
            <ReceiveIconButton />
            <ReceiveIconButton />
            <ReceiveIconButton />
            <ReceiveIconButton />
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
