import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/components/ui/Card';

describe('Card Component', () => {
    it('renders card with content', () => {
        render(
            <Card>
                <CardContent>Test content</CardContent>
            </Card>
        );
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders card with header and title', () => {
        render(
            <Card>
                <CardHeader>
                    <CardTitle>Test Title</CardTitle>
                </CardHeader>
                <CardContent>Content</CardContent>
            </Card>
        );
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('applies hover class when hover prop is true', () => {
        const { container } = render(<Card hover>Content</Card>);
        expect(container.firstChild).toHaveClass('hover:shadow-lg');
    });
});
