import { mount } from 'svelte';
import { Router } from 'svelte-routing';

import App from '@/App.svelte';

import '@/assets/main.scss';

const app = mount(App, {
  target: document.getElementById('app')!,
  props: {
    Router,
  },
});

export default app;