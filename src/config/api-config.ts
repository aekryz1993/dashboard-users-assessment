const env = import.meta.env as ImportMetaEnv & { VITE_BASE_URL: string };

const apiConfig: {baseURL: string} = {
  baseURL: env.VITE_BASE_URL || '/api',
};
export default apiConfig;