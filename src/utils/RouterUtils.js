import { compile } from 'path-to-regexp';

const compileOptions = options => Object.keys(options).map(key => `${key}=${options[key]}`).join('&');

const compileHash = (route) => {
  const { path, keys, options } = route;

  const toPath = compile(path);
  const query = compileOptions(options);
  return `#/${toPath(keys)}${query === '' ? '' : `?${query}`}`;
};

export default {
  compileHash,
};
