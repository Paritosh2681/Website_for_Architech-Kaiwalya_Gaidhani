import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const drawingsLoader = (): Plugin => {
  const virtualModuleId = 'virtual:drawings';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  const getDrawings = () => {
    const projectsDir = path.resolve(process.cwd(), 'public/images/projects');
    const drawingsMap: Record<string, string[]> = {};

    try {
      if (fs.existsSync(projectsDir)) {
        const projects = fs.readdirSync(projectsDir);
        projects.forEach(project => {
          const drawingsDir = path.join(projectsDir, project, 'drawings');
          drawingsMap[project] = []; 
          if (fs.existsSync(drawingsDir)) {
            const files = fs.readdirSync(drawingsDir);
            const images = files
              .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
              .map(file => `/images/projects/${project}/drawings/${encodeURIComponent(file)}`);
            
            if (images.length > 0) {
               console.log(`Found ${images.length} drawings for ${project}`);
            }
            drawingsMap[project] = images;
          }
        });
      }
    } catch (e) {
      console.error("Error loading drawings:", e);
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
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const drawings = getDrawings();
        return `export default ${JSON.stringify(drawings)}`;
      }
    },
    configureServer(server) {
      const projectsDir = path.resolve(process.cwd(), 'public/images/projects');
      server.watcher.add(projectsDir);
      
      server.watcher.on('all', (eventName, file) => {
        const normalizedFile = file.replace(/\\/g, '/');
        if (normalizedFile.includes('/drawings/')) {
          console.log(`Drawing update (${eventName}): ${file}`);
          const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId);
          if (mod) {
            server.moduleGraph.invalidateModule(mod);
          }
          server.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      });
    }
  };
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/Website_for_Architech-Kaiwalya_Gaidhani/',
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
