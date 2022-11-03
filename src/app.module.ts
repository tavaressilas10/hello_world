import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '81485931',
      database: 'db_blogpessoal',
      entities: [Postagem],
      synchronize: true
    }),
    PostagemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
