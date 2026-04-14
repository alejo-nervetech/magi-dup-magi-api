FROM node:22
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
# Install ALL deps (including devDeps) so build tools are available
RUN npm ci
 
# Copy source BEFORE build so src/ exists during compilation
COPY . .
 
# Build step — devDeps are still present here (e.g. TypeScript, esbuild)
RUN npm run build
 
# Strip devDeps AFTER build — keeps the final image lean
RUN npm prune --omit=dev
 
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"
  
 
CMD ["node", "index.js"]