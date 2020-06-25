import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private storage: Storage) { }

  async insert(value){
    console.log(value);
    let pessoas=[];
    this.storage.get('pessoa').then(async x=>{
      if(x==null || x.length==0){
        await this.storage.set('pessoa', [value]);
        console.log("Ta no if")
      }else{
        this.storage.get('pessoa').then(async x=>{
          x.forEach(element => {
            pessoas.push(element);
          });
          pessoas.push(value);
          await this.storage.set('pessoa', pessoas);
        })
        console.log("Ta no else")
      }
    })
    this.storage.get('pessoa').then(x=>{
      console.log(x);
    })
  }

  async getPessoaId(id){
    await this.storage.get('pessoa').then(x=>{
      x.forEach(element => {
        if(element.id==id){
          console.log("Busca: ");
          console.log(element);
        }
      });
    })
  }

  async getPessoaRaca(saudeMental){
    console.log("saude mental: "+saudeMental)
    await this.storage.get('pessoa').then(x=>{
      x.forEach(element => {
        if(element.saudeMental===saudeMental){
          console.log("Busca: ");
          console.log(element);
        }
      });
    })
  }

}
