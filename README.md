# useNextjsSearchParam

A custom hook for handling URL search parameters in Next.js applications.

## Installation

```bash
npm install use-nextjs-search-param
```

## Usage

```typescript
import { useNextjsSearchParam } from 'use-nextjs-search-param';

const Component = () => {
  const { onFilter, onReset, onResetAll, page, ...params } = useNextjsSearchParam();

  // Use the hook as needed in your component
};
```

## API

- `onFilter(key: string, value: any)`: Sets a filter parameter.
- `onReset(key: string)`: Removes a specific filter parameter.
- `onResetAll()`: Removes all filter parameters.
- `page: number`: Page number (default is 1).
- `...params`: Other dynamic parameters from the URL.