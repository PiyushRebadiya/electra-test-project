// hooks/useScriptLoader.js
import { useEffect, useState } from 'react';

const useScriptLoader = (scripts) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.setAttribute('data-cookieconsent', 'ignore');
        script.async = false;
        script.defer = false;
        
        script.onload = resolve;
        script.onerror = reject;
        
        document.head.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      try {
        for (const url of scripts) {
          await loadScript(url);
        }
        setLoaded(true);
      } catch (error) {
        console.error('Script loading error:', error);
        setLoaded(true);
      }
    };

    loadAllScripts();
  }, [scripts]);

  return loaded;
};

export default useScriptLoader;