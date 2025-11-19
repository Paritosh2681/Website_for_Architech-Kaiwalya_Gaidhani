import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const drawingsLoader = (): Plugin => {
  const virtualModuleId = 'virtual:drawings';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  let drawingsCache: Record<string, string[]> | null = null;

  const getDrawings = () => {
    const projectsDir = path.resolve(__dirname, 'public/images/projects');
    const drawingsMap: Record<string, string[]> = {};

    if (fs.existsSync(projectsDir)) {
      const projects = fs.readdirSync(projectsDir);
      projects.forEach(project => {
        const drawingsDir = path.join(projectsDir, project, 'drawings');
        if (fs.existsSync(drawingsDir)) {
          const files = fs.readdirSync(drawingsDir);
          const images = files
            .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
            .map(file => `/images/projects/${project}/drawings/${file}`);

          if (images.length > 0) {
            drawingsMap[project] = images;
          }
        }
      });
    }
    return drawingsMap;
  };

  return {
    name: 'drawings-loader',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id, options) {
      const isDev = options?.ssr === false;
      if (id === resolvedVirtualModuleId) {
        // In development, always re-read the directory.
        // In build, read it once.
        if (isDev || !drawingsCache) {
          drawingsCache = getDrawings();
        }
        return `export default ${JSON.stringify(drawingsCache)}`;
      }
    },
    configureServer(server) {
      server.watcher.add(path.resolve(__dirname, 'public/images/projects'));

      server.watcher.on('add', (file) => {
        if (file.includes(path.join('images', 'projects')) && file.includes('drawings')) {
          const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId);
          if (mod) {
            server.moduleGraph.invalidateModule(mod);
            server.ws.send({ type: 'full-reload', path: '*' });
          }
        }
      });
    }
  };
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react(), drawingsLoader()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
