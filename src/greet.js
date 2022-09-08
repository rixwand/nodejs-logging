export const sayHello = (nama) => {
  if (!nama) throw new Error();
  return `Hello ${nama}`;
};
