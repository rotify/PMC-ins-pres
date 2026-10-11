import { useEffect, useState } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BackToTop, Preloader } from './components/Shared';

import Home          from './pages/Home';
import About         from './pages/About';
import Vision        from './pages/Vision';
import Mission       from './pages/Mission';
import Books         from './pages/Books';
import Gallery       from './pages/Gallery';
import Contact       from './pages/Contact';
import CollectiveHub from './pages/CollectiveHub';
import Insights      from './pages/Insights';

const PAGES = {
  home: Home,
  about: About,
  vision: Vision,
  mission: Mission,
  books: Books,
  gallery: Gallery,
  contact: Contact,
  hub: CollectiveHub,
  insights: Insights,
};

function AppInner() {
  const { page } = useNavigation();
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [preloaderGone, setPreloaderGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPreloaderDone(true), 1400);
    const t2 = setTimeout(() => setPreloaderGone(true), 2100);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  const PageComponent = PAGES[page] || Home;

  return (
    <>
      {!preloaderGone && <Preloader done={preloaderDone} />}
      <Navbar />
      <main>
        <PageComponent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppInner />
    </NavigationProvider>
  );
}
