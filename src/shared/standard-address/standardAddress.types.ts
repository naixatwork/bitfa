export enum EJustify {
  START = "start",
  CENTER = "center",
  END = "end",
}

export type TruncatedAddressPropsType = {
  address: string;
  containerClassName: string;
  justify?: EJustify;
};
