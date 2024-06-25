import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Atendimento } from '../../model/atendimento';
import { AtendimentoService } from '../../service/atendimento.service';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';
import { IList } from '../i-list';

@Component({
  selector: 'app-atendimento',
  standalone: true,
  imports: [BarraComandosComponent, CommonModule],
  templateUrl: './atendimento.component.html',
  styles: ``
})
export class AtendimentoComponent implements IList<Atendimento> {

  constructor(
    private servico: AtendimentoService
  ) {}

  ngOnInit(): void {
    this.get();
  }

  registros: Atendimento[] = [];

  get(termoBusca?: string | undefined): void {
    this.servico.get(termoBusca).subscribe({
      next: (resposta: Atendimento[]) => {
        this.registros = resposta
          .filter(item => {
            return ['CHEGADA', 'ATENDIMENTO'].includes(item.status);
          })
          .filter(item => {
            let hoje = new Date().toISOString().split('T')[0];
            return item.data == hoje;
          });
      }
    });
  }
  
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

}
