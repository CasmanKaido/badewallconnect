# Utilities Documentation

This directory contains utility functions for the Base WalletConnect application.

## Available Utilities

### formatCurrency

Format numbers as currency strings.

```typescript
import { formatCurrency, formatEth } from '@/utils/formatCurrency';

formatCurrency(1234.56); // "$1,234.56"
formatCurrency(1234.56, 'EUR', 'de-DE'); // "1.234,56 €"
formatEth(0.0015); // "0.0015 ETH"
```

### formatDate

Format dates with various options.

```typescript
import { formatDate, getRelativeTime } from '@/utils/formatDate';

formatDate(new Date()); // "Dec 3, 2025"
getRelativeTime(new Date(Date.now() - 3600000)); // "1 hours ago"
```

### truncateAddress

Truncate Ethereum addresses for display.

```typescript
import { truncateAddress, isValidAddress } from '@/utils/truncateAddress';

truncateAddress('0x1234...5678'); // "0x1234...5678"
isValidAddress('0x...'); // true/false
```

### cn (classnames)

Merge Tailwind CSS classes with proper precedence.

```typescript
import { cn } from '@/utils/cn';

cn('px-2 py-1', 'px-4'); // "py-1 px-4"
```

### validators

Common validation functions.

```typescript
import { isValidEmail, isValidUrl, hasMinLength, isRequired } from '@/utils/validators';

isValidEmail('test@example.com'); // true
isValidUrl('https://example.com'); // true
hasMinLength('password', 8); // true/false
isRequired('value'); // true/false
```
