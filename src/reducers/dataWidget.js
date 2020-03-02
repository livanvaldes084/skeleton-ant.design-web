import uuid from "uuid/v1";

export const dataWidget = [
  {
    id: uuid(),
    name: "Budget",
    cmp: "Budget",
    position: { x: 0, y: 0, w: 2, h: 4 },
    imageUrl: "/images/widget/dropbox.png"
  },
  {
    id: uuid(),
    name: "Total Users",
    cmp: "TotalUsers",
    position: { x: 2, y: 0, w: 2, h: 4 },
    imageUrl: "/images/widget/dropbox.png"
  }
];
