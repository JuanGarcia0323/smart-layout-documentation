import Button from '@sp-components/button/Button';
import { IHeaderProps } from '@sp-interfaces';
import { Anchor, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@store';
import { setOpenSideBar } from '@sp-store/SideBar';
import { useScreenSize } from '@sp-components/utils/useScreenSize';

const Header = ({ children, tabs, title, ...rest }: IHeaderProps) => {
  const screenSize = useScreenSize();
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.SideBar);

  return (
    <>
      <div className="w-full">
        <div className="shadow-md flex justify-between w-full h-8 bg-background gap-2 rounded">
          <Anchor
            affix
            replace
            className="text-xs h-full w-full overflow-x-auto border-none pt-[6px] ml-2"
            items={tabs}
            direction="horizontal"
          />
          <Button
            icon={<MenuOutlined />}
            className="rounded-none rounded-tr rounded-br"
            type="primary"
            onClick={() => dispatch(setOpenSideBar())}
          />
        </div>
      </div>
      <Drawer
        placement={screenSize.width > 425 ? 'right' : 'top'}
        height="auto"
        closable={true}
        onClose={() => dispatch(setOpenSideBar())}
        open={open}
        keyboard={true}
        title={
          <div className="flex w-full items-center justify-between gap-2">
            {title}
            <CloseOutlined
              onClick={() => dispatch(setOpenSideBar())}
              className="text-neutral-500"
            />
          </div>
        }
        zIndex={100}
        {...rest}
        closeIcon={''}
      >
        {children}
      </Drawer>
    </>
  );
};

export default Header;
