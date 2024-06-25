import { Component } from '@angular/core';
import { IForm } from '../../i-form';
import { Atendimento } from '../../../model/atendimento';
import { FormsModule } from '@angular/forms';
import { AtendimentoService } from '../../../service/atendimento.service';
import { ConvenioService } from '../../../service/convenio.service';
import { PacienteService } from '../../../service/paciente.service';
import { ProfissionalService } from '../../../service/profissional.service';
import { Convenio } from '../../../model/convenio';
import { Paciente } from '../../../model/paciente';
import { Profissional } from '../../../model/profissional';

@Component({
  selector: 'app-agenda-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agenda-form.component.html',
  styles: ``
})
export class AgendaFormComponent implements IForm<Atendimento> {

  constructor(
    private servico: AtendimentoService,
    private servicoConveio: ConvenioService,
    private servicoPaciente: PacienteService,
    private servicoProfissional: ProfissionalService
  ){}

  ngOnInit(): void {
    this.servicoConveio.get().subscribe({
      next: (resposta: Convenio[]) => {
        this.convenios = resposta;
          }
      });
    }
  registro: Atendimento = <Atendimento>{};
  convenios: Convenio[] = [];
  paciente: Paciente[] = [];
  profissionais: Profissional[] = [];

  save(): void {
    console.log('save');
  }

}
