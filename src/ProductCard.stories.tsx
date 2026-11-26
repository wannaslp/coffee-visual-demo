import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductCard } from './ProductCard';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  args: { title: 'Кофемолка', price: 4990, image: '/fixtures/grinder.jpg' },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Narrow: Story = {
  decorators: [Story => <div style={{ width: 220 }}><Story /></div>],
};

export const Wide: Story = {
  decorators: [Story => <div style={{ width: 320 }}><Story /></div>],
};
