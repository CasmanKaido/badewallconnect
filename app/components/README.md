# Components Documentation

This directory contains all UI components for the Base WalletConnect application.

## Directory Structure

```
components/
├── ui/              # Core UI components (40+ components)
├── layout/          # Layout components (Header, Footer, Sidebar, etc.)
├── sections/        # Page section components
├── icons/           # Icon components
└── seo/             # SEO and meta components
```

## UI Components

### Foundation
- **Button**: Multiple variants (primary, secondary, outline) and sizes
- **Card**: Container with optional hover effects
- **Input**: Form input with label and error states
- **Badge**: Status indicators with semantic variants
- **Avatar**: User avatars with fallback initials
- **Divider**: Visual separators (horizontal/vertical)
- **Container**: Content width containers
- **Grid**: Responsive grid layouts
- **Flex**: Flexible box layouts
- **Text**: Typography components

### Forms
- **Label**: Form labels with required indicator
- **Textarea**: Multi-line text input
- **Checkbox**: Checkbox input
- **Radio**: Radio button input
- **Select**: Dropdown select
- **Switch**: Toggle switch
- **Slider**: Range slider
- **FormGroup**: Form field wrapper
- **ErrorMessage**: Form error display
- **Form**: Form wrapper with spacing

### Feedback
- **Alert**: Status messages
- **Toast**: Notification toasts
- **Spinner**: Loading spinner
- **Skeleton**: Loading skeletons
- **Progress**: Progress bars
- **Notification**: Rich notifications

### Overlays
- **Modal**: Dialog modals
- **Tooltip**: Hover tooltips
- **Popover**: Click popovers
- **Dialog**: Confirmation dialogs
- **Drawer**: Side drawers

## Usage

Import components from their respective directories:

```typescript
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
```
