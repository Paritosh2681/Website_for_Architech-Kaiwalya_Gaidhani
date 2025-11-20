export const getAssetUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Use Vite's import.meta.env.BASE_URL which respects the base config
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
