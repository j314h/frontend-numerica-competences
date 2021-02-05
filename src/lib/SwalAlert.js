//alert quickly succes or error
export const AlertQuickly = (position, typeIcon, title, time) => {
  return {
    position: position,
    icon: typeIcon,
    title: title,
    showConfirmButton: false,
    timer: time,
  };
};
