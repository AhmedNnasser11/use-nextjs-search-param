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

## Example

You can write any name as key and use it from `useNextjsSearchParam`:

```typescript
import { useNextjsSearchParam } from 'use-nextjs-search-param';

const MyComponent = () => {
  const { onFilter, onReset, name, page } = useNextjsSearchParam();

  return (
    <SearchInput
      onSearchClear={() => onReset('name')}
      searchTerm={name || ''}
      onSearchChange={(e) => {
        onFilter('name', e.target.value);
        if (page === 1) return;
        onFilter('page', 1);
      }}
    />
  );
};
```

## Author

Ahmed Nasser  
[LinkedIn Profile](https://www.linkedin.com/in/ahmed-nasser-931490212/)