<template>
  <div>
    <h1 class="centralizado">{{titulo}}</h1>

    <p v-show="mensagem" class="centralizado">{{mensagem}}</p>
    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="type to filter"
    />
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="(foto, index) of fotosComFiltro" :key="index">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            v-meu-transform:scale.animate="1.2"
            :url="foto.url"
            :titulo="foto.titulo"
          />
          <meu-botao
            rotulo="remover"
            tipo="button"
            :confirmacao="true"
            @botaoAtivado="remove(foto)"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import FotoService from "../../domain/foto/FotoService";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },

  data() {
    return {
      titulo: "Home",
      fotos: [],
      filtro: "",
      mensagem: ''
    };
  },

  methods: {
    remove(foto) {

        this.service.apaga(foto._id)
        .response((resp) =>{
          console.log(resp);
        let indice = this.fotos.indexOf(foto);
        this.fotos.splice(indice,1);
        this.mensagem = 'Foto removida com sucesso';
      }, err => {
        console.log(err)
        this.mensagem = 'Não foi possivel remover a foto';
      })
    }
  },

  //filtro com array na lista-fotos-item
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  created() {

    this.service = new FotoService(this.$resource)

    this.service
    .lista()
    .then(fotos => (this.fotos = fotos), err => console.log(err));
  }
};
</script>
<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 55%;
  margin: 0 23%;
  border: 2px solid #000;
  padding: 10px;
  text-align: center;
}

.filtro:focus {
  border: none;
}
</style>