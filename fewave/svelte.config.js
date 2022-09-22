import preprocess from "svelte-preprocess";
import json from '@rollup/plugin-json';
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  
};

export default config;
