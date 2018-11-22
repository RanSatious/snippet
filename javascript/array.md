# array snippets

## 快速生成数组

```javascript
export function generate(n) {
  n = Number.parseInt(n);
  if (Number.isNaN(n)) {
    throw new Error('n should be a number');
  }
  if (n <= 0) {
    throw new Error('n should > 0');
  }
  return [...Array(n).keys()].map(d => d + 1);
}
```
