import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormConfig from './config/database/ormconfig';
import { TypeOrmModule } from './config/database/typrOrmModule';

@Module({
  imports: [TypeOrmModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
