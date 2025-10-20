# ---------------------------
# Base image nhẹ
# ---------------------------
FROM node:22-alpine AS base
WORKDIR /app
ENV NODE_ENV=production
EXPOSE 3000

# ---------------------------
# Stage 1: Cài dependencies (cả dev)
# ---------------------------
FROM base AS deps
COPY package*.json ./
RUN npm ci

# ---------------------------
# Stage 2: Build app
# ---------------------------
FROM deps AS build
# Copy toàn bộ source (bao gồm next.config.ts, tsconfig.json, src/, public/, ...)
COPY . .
# Build Next.js
RUN npm run build

# ---------------------------
# Stage 3: Runner (production only)
# ---------------------------
FROM base AS runner
# Copy node_modules production-only từ deps
COPY --from=deps /app/node_modules ./node_modules
# Copy build output từ build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./next.config.js
COPY --from=build /app/package.json ./package.json

# Chạy app
CMD ["npm", "start"]