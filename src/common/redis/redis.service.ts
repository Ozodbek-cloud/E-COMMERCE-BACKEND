import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;

  async onModuleInit() {
    const redisUrl = process.env.REDIS_URL || "redis://127.0.0.1:6379";
    if (!redisUrl) {
      throw new Error('REDIS_URL is not defined in .env');
    }

    this.client = new Redis(redisUrl, {
      tls: redisUrl.startsWith("rediss://") ? {} : undefined,
    });

    this.client.on("connect", () => console.log("🚀 Redis connected"));
    this.client.on("error", (err) => console.error("❌ Redis error:", err));
  }

  async onModuleDestroy() {
    await this.client.quit();
  }

  async set(key: string, value: string, seconds: number) {
    await this.client.set(key, value, 'EX', seconds);
  }

  async get(key: string) {
    return await this.client.get(key);
  }

  async del(key: string) {
    await this.client.del(key);
  }
}
