import { formatCurrency, formatEth } from '@/app/utils/formatCurrency';

describe('formatCurrency', () => {
    it('formats USD currency correctly', () => {
        expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    it('formats EUR currency correctly', () => {
        expect(formatCurrency(1234.56, 'EUR', 'de-DE')).toContain('1.234,56');
    });

    it('handles zero correctly', () => {
        expect(formatCurrency(0)).toBe('$0.00');
    });

    it('handles negative values', () => {
        expect(formatCurrency(-1234.56)).toBe('-$1,234.56');
    });
});

describe('formatEth', () => {
    it('formats ETH with default decimals', () => {
        expect(formatEth(0.123456)).toBe('0.1235 ETH');
    });

    it('formats ETH with custom decimals', () => {
        expect(formatEth(0.123456, 2)).toBe('0.12 ETH');
    });

    it('handles string input', () => {
        expect(formatEth('0.5')).toBe('0.5000 ETH');
    });
});
