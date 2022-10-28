import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';


 const ormConfig = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "EP",
    entities: [],
    migrations: ["dist/shared/typeorm/migrations/*.js"],
    // cli:{migrationsDir:"dist/shared/typeorm/migrations/*.js"},
    synchronize: true,
  })


export default ormConfig