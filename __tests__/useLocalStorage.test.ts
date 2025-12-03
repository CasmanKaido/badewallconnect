import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';

describe('useLocalStorage Hook', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('returns initial value when localStorage is empty', () => {
        const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
        expect(result.current[0]).toBe('initial');
    });

    it('stores value in localStorage', () => {
        const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

        act(() => {
            result.current[1]('new value');
        });

        expect(result.current[0]).toBe('new value');
        expect(localStorage.getItem('test-key')).toBe(JSON.stringify('new value'));
    });

    it('retrieves existing value from localStorage', () => {
        localStorage.setItem('test-key', JSON.stringify('existing'));
        const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
        expect(result.current[0]).toBe('existing');
    });
});
