import edit from "./edit.svg";
import trash from "./trash.svg";
import close from "./close.svg";
import fallback from "./image_not_found.png";
import alertTriangle from "./alert_triangle.svg";

export const icons = {
  edit,
  close,
  trash,
  fallback,
  alertTriangle,
};

type IIcons = keyof typeof icons;

export const getImage = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
