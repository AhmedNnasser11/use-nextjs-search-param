
# use-nextjs-search-params

This is a custom hook for handling search parameters in Next.js applications.

### Features

- Add any key-value pair in the `onFilter` function and use it as you named.
- Set arrays or objects without using `JSON.stringify` because the custom hook handles this by default.

### Author

- [Ahmed Nasser](https://www.linkedin.com/in/ahmed-nasser-931490212/)

## Installation

```bash
npm install use-nextjs-search-params
```

## Usage

### Example

```typescript
import useNextjsSearchParams from 'use-nextjs-search-params';

const ExampleComponent = () => {
  const { onFilter, onReset, onResetAll, ...params } = useNextjsSearchParams();

  const handleFilter = () => {
    onFilter('category', 'books');
    onFilter('price', { min: 10, max: 50 });
  };

  const handleReset = () => {
    onReset('category');
  };

  const handleResetAll = () => {
    onResetAll();
  };

  return (
    <div>
      <button onClick={handleFilter}>Set Filters</button>
      <button onClick={handleReset}>Reset Category</button>
      <button onClick={handleResetAll}>Reset All Filters</button>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
};

export default ExampleComponent;
```

```typescript
const Component = () => {
  const { onFilter, onReset, onResetAll, page, ...params } = useNextjsSearchParams();

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

You can write any name as key and use it from `useNextjsSearchParams`:

```typescript
import useNextjsSearchParams from 'use-nextjs-search-params';

const MyComponent = () => {
  const { onFilter, onReset, name, page } = useNextjsSearchParams();

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

## License

This project is licensed under the MIT License.
