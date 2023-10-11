import { ReactNode } from 'react';
import { TableProps } from 'antd';
interface IGridProps<T> extends TableProps<T> {
  autoFitWidth?: boolean;
}

interface ITitleGridProps {
  children: ReactNode;
}

export type { IGridProps, ITitleGridProps };
