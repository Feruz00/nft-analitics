import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import '../styles/nprogress.css';
import { useRouter } from 'next/router';
import nprogress from 'nprogress';

const MyApp = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    router.events.on('routeChangeStart', () => nprogress.start());
    router.events.on('routeChangeComplete', () => nprogress.done());
    router.events.on('routeChangeError', () => nprogress.done());
  }, []);

  if (!mounted) return null;
  return (
    <ThemeProvider attribute="class">

      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/7409f70bd9.js" crossorigin="anonymous" />
    </ThemeProvider>

  );
};

export default MyApp;
