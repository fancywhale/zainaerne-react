/** General Configurations Like PORT, HOST names and etc... */

interface config {
  env: string;
  host: string;
  port: number;
  karmaPort: number;

  // This part goes to React-Helmet for Head of our HTML
  app: {
    head: {
      title: string;
      titleTemplate: string;
      meta: Object[];
    }
  };
  
  backendUrl: string;
  apiUrl: string;
}

declare const config: config;

export default config;