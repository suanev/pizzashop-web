import rocketseatConfig from "@rocketseat/eslint-config/react.js";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  rocketseatConfig, // Inclui a configuração da Rocketseat
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Aplica as regras a esses arquivos
    plugins: {
      "simple-import-sort": simpleImportSort, // Registra o plugin
    },
    rules: {
      "simple-import-sort/imports": "error", // Ativa a regra de ordenação de imports
    },
  },
];
