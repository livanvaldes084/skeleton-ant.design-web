import uuid from "uuid/v1";

export default [
  {
    id: uuid(),
    name: "Progress",
    cmp: "TasksProgress",
    imageUrl: "/images/widget/dropbox.png"
  },
  {
    id: uuid(),
    name: "Total Profit",
    cmp: "TotalProfit",
    imageUrl: "/images/widget/dropbox.png"
  },
  {
    id: uuid(),
    name: "Latest Sales",
    cmp: "LatestSales",
    imageUrl: "/images/widget/dropbox.png"
  }
];
