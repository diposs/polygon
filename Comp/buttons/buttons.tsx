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
import {
  AuroraButton,
  AvaxButton,
  CosmosButton,
  EthereumButton,
  NearButton,
  OasisButton,
  OptimismButton,
  PolygonButton,
} from "./functions";

export const buttons = [
  {
    title: "Ethereum",
    icon: IconCreditCard,
    color: "violet",
    function: EthereumButton,
  },
  {
    title: "Polygon",
    icon: IconBuildingBank,
    color: "indigo",
    function: PolygonButton,
  },
  { title: "BSC", icon: IconRepeat, color: "blue", function: EthereumButton },
  {
    title: "Optimism",
    icon: IconReceiptRefund,
    color: "green",
    function: OptimismButton,
  },
  {
    title: "Oasis (Emerald)",
    icon: IconReceipt,
    color: "teal",
    function: OasisButton,
  },
  {
    title: "Aurora",
    icon: IconReceiptTax,
    color: "cyan",
    function: AuroraButton,
  },
  {
    title: "Avax C-Chain",
    icon: IconReport,
    color: "pink",
    function: AvaxButton,
  },
  {
    title: "Near",
    icon: IconCoin,
    color: "red",
    function: NearButton,
  },
  {
    title: "Cosmos",
    icon: IconCashBanknote,
    color: "orange",
    function: CosmosButton,
  },
];

module.exports = { buttons };
