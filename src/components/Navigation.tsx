import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

export const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  // Reserve space and enable smooth anchor behavior for the main scroller
  const applyOffsets = useCallback(() => {
    const h = headerRef.current?.getBoundingClientRect().height ?? 80;
    document.documentElement.style.setProperty('--header-h', `${h}px`);
    (document.documentElement.style as any).scrollPaddingTop = `${h + 8}px`;
    document.body.style.paddingTop = `${h}px`;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setShowScrollTop(y > 300);
      applyOffsets();
    };
    const onResize = () => applyOffsets();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    requestAnimationFrame(applyOffsets);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.body.style.paddingTop = '';
      (document.documentElement.style as any).scrollPaddingTop = '';
      document.documentElement.style.removeProperty('--header-h');
    };
  }, [applyOffsets]);

  // Find the element that actually scrolls (nearest with overflow 'auto'/'scroll')
  const getScrollContainer = (node: HTMLElement | null): HTMLElement | 'window' => {
    let p = node?.parentElement ?? null;
    while (p && p !== document.body) {
      const s = getComputedStyle(p);
      const oy = s.overflowY;
      if ((oy === 'auto' || oy === 'scroll') && p.scrollHeight > p.clientHeight) {
        return p;
      }
      p = p.parentElement;
    }
    // default to window
    return 'window';
  };

  // Smoothly scroll to an element, accounting for header height and any scroll container
  const scrollToTarget = (target: HTMLElement) => {
    const headerH = (headerRef.current?.getBoundingClientRect().height ?? 0) + 8;
    const container = getScrollContainer(target);

    if (container === 'window') {
      const top =
        target.getBoundingClientRect().top +
        (document.scrollingElement?.scrollTop ?? window.pageYOffset) -
        headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      // compute position of target inside the container using rects (works with transforms)
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const top = container.scrollTop + (targetRect.top - containerRect.top) - headerH;
      container.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Anchor click handler: close mobile menu, then scroll on the next frame with fresh measurements
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // let modifier clicks work normally
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();

    setIsMobileOpen(false);
    const run = () => {
      const target = document.querySelector(href) as HTMLElement | null;
      if (!target) return;
      // after menu collapse & layout settles, measure and scroll
      requestAnimationFrame(() => {
        applyOffsets();
        scrollToTarget(target);
        try { history.replaceState(null, '', href); } catch {}
      });
    };

    // wait a tick so mobile menu can collapse first (header height changes)
    requestAnimationFrame(run);
  };

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsMobileOpen(false);
    requestAnimationFrame(() => {
      applyOffsets();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      try { history.replaceState(null, '', '#hero'); } catch {}
    });
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        ref={headerRef as any}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'glass backdrop-blur-md border-b border-border/20' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Primary"
        style={{ paddingTop: 'max(env(safe-area-inset-top), 0px)' }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Brand → Home */}
            <a
              href="#hero"
              onClick={scrollToTop}
              className="text-xl font-bold text-gradient focus:outline-none focus:ring-2 focus:ring-primary/50 rounded px-1"
              aria-label="Go to top"
            >
              Manish Nerella
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
                  aria-label={`Go to ${item.name}`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            id="mobile-menu"
            initial={false}
            animate={{ height: isMobileOpen ? 'auto' : 0, opacity: isMobileOpen ? 1 : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2">
              <a
                href="#hero"
                onClick={scrollToTop}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </a>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Scroll-to-top FAB */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        onClick={() => scrollToTop()}
        className="fixed bottom-8 right-8 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-glow hover:shadow-glow transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </motion.button>
    </>
  );
};
