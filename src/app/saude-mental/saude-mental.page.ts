import { Component, OnInit } from '@angular/core';
import {Pessoas} from '../model/pessoas.model';

import {PessoasService} from '../services/pessoas.service';
@Component({
  selector: 'app-saude-mental',
  templateUrl: './saude-mental.page.html',
  styleUrls: ['./saude-mental.page.scss'],
})
export class SaudeMentalPage implements OnInit {
  pessoa: Pessoas={} as Pessoas;

  constructor(private service: PessoasService) { }

  ngOnInit() {
  }
  async onSubmit(form){
    await this.service.insert(form.value);
  }
  async pesquisarEstadoMental(form){
    await this.service.getPessoaRaca(form.value.saudeMental);
  }
  async pesquisarId(form){
    await this.service.getPessoaId(form.value.id);
  }

}
