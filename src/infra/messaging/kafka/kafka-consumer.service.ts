import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor(private configService: ConfigService) {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['amused-catfish-7704-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: configService.get<string>('KAFKA_USERNAME'),
          password: configService.get<string>('KAFKA_PASS'),
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
