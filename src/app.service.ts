import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Blog do Silas';
  }
  getBSM(): string {
    return 'Aqui estão as BSMs: Responsabilidade pessoal, Mentalidade de crescimento Orientação ao futuro, Persistência'+
     '<br>Comunicação, Orientação ao detalhe, Trabalho em equipe, Gestão de tempo';
  }
  getOBJ(): string {
    return 'Ser um programador de sucesso';
  }
}