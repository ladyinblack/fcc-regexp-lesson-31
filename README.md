# js-zenzsb

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-zenzsb)

### [Reuse Patterns Using Capture Groups](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups)

## HINTS
### Hint 1
Given code below:
```js
let testString = "test test test";
let reRegex = /(test)\s\1/;
let result = reRegex.test(testString);
```
`result` will match only `test test` because `\1` in this example stands for the same text as most recently matched by the 1st capturing group `(test)`.

If we were to literally translate the regex, it would look something like this:
```js
let re = /(test)\s\1/;
let literalRe = /test\stest/;
```
Both `re` and `literalRe` would match the same thing.
### Hint 2
Given the code below:
```js
let testString = "test test test";
let reRegex = /(test)(\s)\1\2\1/;
let result = reRegex.test(testString);
```
`result` will match whole `test test test` because:
- `\1` repeats (test)
- `\2` repeats (`\s`)
### Hint 3
The code below:
```js
let testString = "test test test test test test";
let reRegex = /(test)(\s)\1\2\1/g;
let resutl = reRegex.test(testString);
```
because we used `\g`, our Regex doesn't return after first full match (`test test test`) and matched all repetitions.  Think about how you can assert the **start** and **end** of the string.
