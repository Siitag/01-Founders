function get(src, path) {
    const keys = path.split('.');
    let value = src;
    for (const key of keys) {
      value = value[key];
      if (value === undefined) {
        break;
      }
    }
    
    return value;
  }
  