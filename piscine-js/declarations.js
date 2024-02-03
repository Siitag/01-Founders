const escapeStr = "`\\/\"'";
const arr = Object.freeze([4, '2']);
const obj = Object.freeze({
  str: 'string',
  num: 42,
  bool: true,
  undef: undefined
});
const nested = Object.freeze({
  arr: Object.freeze([4, undefined, '2']),
  obj: Object.freeze({
    str: 'string',
    num: 42,
    bool: true
  })
});
Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);
Object.freeze(arr);
Object.freeze(obj);