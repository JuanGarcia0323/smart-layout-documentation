import type { Meta, StoryObj } from '@storybook/react';
import { ColumnsType } from 'antd/es/table';
import Grid from '@sp-components/grid/Grid';

interface DataTest {
  key: string;
  location: string;
  startTime: string;
  endTime: string;
  duration: number;
  faultDescription: string;
  reason: string;
  comment: string;
  type: string;
}

const columns: ColumnsType<DataTest> = [
  { title: 'Index', dataIndex: 'index', key: 'index', responsive: ['md'] },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Start Time',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: 'End Time',
    dataIndex: 'endTime',
    key: 'endTime',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    responsive: ['md'],
  },
  {
    title: 'Fault Description',
    dataIndex: 'faultDescription',
    key: 'faultDescription',
    responsive: ['md'],
  },
  { title: 'Reason', dataIndex: 'reason', key: 'reason', responsive: ['md'] },
  {
    title: 'Comment',
    dataIndex: 'comment',
    key: 'comment',
    responsive: ['md'],
  },
  { title: 'Type', dataIndex: 'type', key: 'type', responsive: ['md'] },
];
const dataArray: DataTest[] = [
  {
    key: '001',
    location: 'Madrid',
    startTime: '2023-09-08 08:00:00',
    endTime: '2023-09-08 09:00:00',
    duration: 60,
    faultDescription: 'Error de conexión',
    reason: 'Interrupción del servicio',
    comment: 'Se solucionó rápidamente',
    type: 'Network',
  },
  {
    key: '002',
    location: 'Barcelona',
    startTime: '2023-09-08 10:00:00',
    endTime: '2023-09-08 11:30:00',
    duration: 90,
    faultDescription: 'Fallo de hardware',
    reason: 'Sobrecalentamiento',
    comment: 'Se reemplazó el equipo dañado',
    type: 'Hardware',
  },
  // A partir de aquí, repetiré algunos datos para rellenar hasta 10 elementos.
  // En un caso real, cada objeto tendría datos únicos.
  ...Array(20).fill({
    key: 'XXX',
    location: 'CiudadX',
    startTime: '2023-09-08 12:00:00',
    endTime: '2023-09-08 13:00:00',
    duration: 60,
    faultDescription: 'Error desconocido',
    reason: 'Motivo no especificado',
    comment: 'En investigación',
    type: 'Unknown',
  }),
].map((e, i) => ({ ...e, index: i, key: i }));

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    columns: columns as ColumnsType<object>,
    dataSource: dataArray,
    className: 'h-screen',
  },
};
