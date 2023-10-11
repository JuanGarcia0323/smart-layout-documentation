import { ReactNode } from 'react';
import { DrawerProps } from 'antd';
import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor';

interface IHeaderProps extends DrawerProps {
  children?: ReactNode;
  tabs?: AnchorLinkItemProps[];
  open?: boolean;
}

export type { IHeaderProps };
