import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            assets: path.resolve(__dirname, "src/assets"),
            components: path.resolve(__dirname, "src/components"),
            container: path.resolve(__dirname, "src/container"),
            contextApi: path.resolve(__dirname, "src/context-api"),
            hooks: path.resolve(__dirname, "src/hooks"),
            imageConstant: path.resolve(__dirname, "src/image-constant"),
            routes: path.resolve(__dirname, "src/routes"),
            serviceEndPoints: path.resolve(__dirname, "src/service-end-point"),
            service: path.resolve(__dirname, "src/service"),
            utils: path.resolve(__dirname, "src/utils")
        }
    }
});
