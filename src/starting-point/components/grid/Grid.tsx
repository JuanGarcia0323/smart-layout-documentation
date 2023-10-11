import { MutableRefObject } from 'react';
import { IGridProps } from '@sp-interfaces';
import { Table } from 'antd';
import Logic from './Logic';
import getSizeClassName from '@sp-components/utils/getSizeClassName';

const Grid = <T extends object>({
  className,
  columns,
  title,
  autoFitWidth,
  ...rest
}: IGridProps<T>) => {
  const { refContainer } = Logic(!!title);
  return (
    <div
      className={`w-full bg-background rounded shadow-md relative overflow-auto h-full${getSizeClassName(
        className
      )}`}
      ref={refContainer as MutableRefObject<HTMLDivElement>}
    >
      <Table
        size="small"
        className={`w-full h-full shadow-md ${className}`}
        // scroll={{ y: scroll }}
        columns={
          autoFitWidth
            ? columns?.map((c) => ({ ...c, width: undefined }))
            : columns
        }
        title={title}
        {...rest}
      />
    </div>
  );
};

export default Grid;
