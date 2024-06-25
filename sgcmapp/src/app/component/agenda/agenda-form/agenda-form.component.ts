import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Atendimento } from '../../../model/atendimento';
import { Convenio } from '../../../model/convenio';
import { Paciente } from '../../../model/paciente';
import { Profissional } from '../../../model/profissional';
import { AtendimentoService } from '../../../service/atendimento.service';
import { ConvenioService } from '../../../service/convenio.service';
import { PacienteService } from '../../../service/paciente.service';
import { ProfissionalService } from '../../../service/profissional.service';
import { IForm } from '../../i-form';

@Component({
  selector: 'app-agenda-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './agenda-form.component.html',
  styles: ``
})
export class AgendaFormComponent implements IForm<Atendimento> {

  constructor(
    private servico: AtendimentoService,
    private servicoConvenio: ConvenioService,
    private servicoPaciente: PacienteService,
    private servicoProfissional: ProfissionalService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.servicoConvenio.get().subscribe({
      next: (resposta: Convenio[]) => {
        this.convenios = resposta;
      }
    });

    this.servicoPaciente.get().subscribe({
      next: (resposta: Paciente[]) => {
        this.pacientes = resposta;
      }
    });

    this.servicoProfissional.get().subscribe({
      next: (resposta: Profissional[]) => {
        this.profissionais = resposta;
      }
    });

  }

  registro: Atendimento = <Atendimento>{};
  convenios: Convenio[] = [];
  pacientes: Paciente[] = [];
  profissionais: Profissional[] = [];

  save(): void {
    this.servico.save(this.registro).subscribe({
      complete: () => {
        this.router.navigate(['/agenda']);
      }
    })
  }

}
