import { render, screen } from '@testing-library/react';
import { Button } from '@/app/components/ui/Button';

describe('Button Component', () => {
    it('renders with children text', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button')).toHaveTextContent('Click me');
    });

    it('applies primary variant class', () => {
        render(<Button variant="primary">Primary</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-blue-600');
    });

    it('applies secondary variant class', () => {
        render(<Button variant="secondary">Secondary</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-gray-600');
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click</Button>);
        screen.getByRole('button').click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
