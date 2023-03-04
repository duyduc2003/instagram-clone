export interface ChildrenProps {
  children: React.ReactNode;
}

export type ILayout = (props: ChildrenProps) => React.ReactElement;

export interface IPageOptions {
  route?: string;
  private?: boolean;
  layout?: ILayout;
}

export type IPage<T = {}> = React.FC<T> & {
  options: IPageOptions;
};
