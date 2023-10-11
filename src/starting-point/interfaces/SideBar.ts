import { SiderProps } from 'antd';
import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor';
import { ReactNode, MutableRefObject } from 'react';

interface ISidebarTriggerProps {
  open: boolean;
}

interface ISideBarProps extends SiderProps {
  children?: ReactNode;
  tabs?: AnchorLinkItemProps[];
  anchorRef?: MutableRefObject<HTMLElement | undefined>;
}
export type { ISideBarProps, ISidebarTriggerProps };
