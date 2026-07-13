# Images

Drop your image files here (`.jpg`, `.png`, `.webp`, `.svg`).

## How to use them in a component

Import the image and use it as the `src` (Vite handles the final URL and hashing):

```tsx
import heroBg from '../assets/images/hero.jpg';

<img src={heroBg} alt="..." />
```

For a CSS background image, import it and set it inline:

```tsx
import heroBg from '../assets/images/hero.jpg';

<div style={{ backgroundImage: `url(${heroBg})` }} />
```

Once you add files here, tell me which image goes where (hero, gallery, why-us, contact)
and I'll wire them in.
