import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import {config} from 'dotenv'
config()


 const ormConfig = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    username: process.env.USERNAME,
    password: String(process.env.PASSWORD),
    database: process.env.DATABASE,
    entities: [],
    migrations: ["dist/shared/typeorm/migrations/*.js"],
    // cli:{migrationsDir:"dist/shared/typeorm/migrations/*.js"},
    synchronize: true,
  })


export default ormConfig