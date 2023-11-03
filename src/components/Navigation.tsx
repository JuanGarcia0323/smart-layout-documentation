import Anchor from 'antd/es/anchor/Anchor';

const Navigation = () => {
  return (
    <div className="hidden lg:block w-2/12 h-fit card sticky top-2">
      <Anchor
        items={[
          {
            title: 'Introduction',
            key: 'introduction',
            href: '#introduction',
          },
          {
            title: 'Getting Started',
            key: 'starting',
            href: '#starting',
          },
          {
            title: 'Examples',
            key: 'examples',
            href: '#examples',
            children: [
              {
                title: 'Save Layouts',
                href: '#saving-layout-example',
                key: 'saving-layout-example',
              },
              {
                title: 'Element Unmount',
                href: '#dynamic-unmount-layout-example',
                key: 'dynamic-unmount-layout-example',
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Navigation;
