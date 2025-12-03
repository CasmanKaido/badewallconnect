import { truncateAddress, isValidAddress } from '@/app/utils/truncateAddress';

describe('truncateAddress', () => {
    it('truncates Ethereum address correctly', () => {
        const address = '0x1234567890abcdef1234567890abcdef12345678';
        expect(truncateAddress(address)).toBe('0x1234...5678');
    });

    it('uses custom start and end characters', () => {
        const address = '0x1234567890abcdef1234567890abcdef12345678';
        expect(truncateAddress(address, 8, 6)).toBe('0x123456...345678');
    });

    it('returns original address if too short', () => {
        const address = '0x1234';
        expect(truncateAddress(address)).toBe('0x1234');
    });

    it('handles empty string', () => {
        expect(truncateAddress('')).toBe('');
    });
});

describe('isValidAddress', () => {
    it('validates correct Ethereum address', () => {
        expect(isValidAddress('0x1234567890abcdef1234567890abcdef12345678')).toBe(true);
    });

    it('rejects invalid checksum', () => {
        expect(isValidAddress('0xGGGG567890abcdef1234567890abcdef12345678')).toBe(false);
    });

    it('rejects address without 0x prefix', () => {
        expect(isValidAddress('1234567890abcdef1234567890abcdef12345678')).toBe(false);
    });

    it('rejects too short address', () => {
        expect(isValidAddress('0x1234')).toBe(false);
    });
});
