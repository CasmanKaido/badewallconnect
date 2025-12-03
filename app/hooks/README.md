# Hooks Documentation

This directory contains custom React hooks for the Base WalletConnect application.

## Available Hooks

### useClickOutside

Detects clicks outside a referenced element.

```typescript
import { useClickOutside } from '@/hooks/useClickOutside';

const ref = useClickOutside<HTMLDivElement>(() => {
  console.log('Clicked outside!');
});

return <div ref={ref}>Content</div>;
```

### useLocalStorage

Persists state in localStorage with automatic serialization.

```typescript
import { useLocalStorage } from '@/hooks/useLocalStorage';

const [value, setValue] = useLocalStorage('key', 'default');
```

### useWindowSize

Tracks window dimensions with automatic updates on resize.

```typescript
import { useWindowSize } from '@/hooks/useWindowSize';

const { width, height } = useWindowSize();
```

### useDebounce

Debounces a value to reduce update frequency.

```typescript
import { useDebounce } from '@/hooks/useDebounce';

const debouncedValue = useDebounce(searchTerm, 500);
```

### useCopyToClipboard

Copies text to clipboard with status tracking.

```typescript
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

const [copiedText, copy] = useCopyToClipboard();
await copy('Text to copy');
```
