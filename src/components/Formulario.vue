<template>
  <div class="container-form">
    <h1>Cadastro de usuários</h1>

    <form @submit.prevent="salvarFormulario">
      <CeInput
        label="Nome"
        placeholder="Digite o nome"
        :required="true"
        :error="false"
        :error-message="'Campo obrigatório'"
        v-model="form.nome"
      />

      <CeInput
        label="Cargo"
        placeholder="Digite o cargo"
        :required="true"
        :error="false"
        :error-message="'Campo obrigatório'"
        v-model="form.cargo"
      />

      <CeInput
        label="E-mail"
        placeholder="Digite o e-mail"
        type="email"
        :required="true"
        :error="false"
        :error-message="'Campo obrigatório'"
        v-model="form.email"
      />

      <ce-select
        :closeChip="true"
        :disabled="false"
        hint="Utilize SHIFT + Clique para selecionar/des-selecionar múltiplas opções."
        :invalid="false"
        label="Equipes"
        multiple
        :options="options"
        placeholder="Selecione uma opção"
        search
        v-model="form.equipes"
      />

      <div>
        <span>Inativo/Ativo</span>
        <CeToggle id="1" contoured v-model="form.status" />
      </div>

      <div class="btn">
        <CeButton type="submit">Cadastrar</CeButton>
      </div>
    </form>

    <CeToast />
  </div>
</template>

<script setup lang="ts">
import {
  CeInput,
  CeToast,
  addToast,
  CeToggle,
  CeSelect,
  CeButton,
} from "@comercti/vue-components-hmg";
import { ref } from "vue";

const form = ref({
  nome: "",
  cargo: "",
  email: "",
  status: false,
  equipes: [],
});

const options = [
  {
    label: "Design",
    value: "1",
  },
  {
    label: "TI",
    value: "2",
  },
  {
    label: "Marketing",
    value: "3",
  },
  {
    label: "Produto",
    value: "4",
  },
  {
    label: "PMO",
    value: "5",
  },
];

const salvarFormulario = () => {
  addToast(
    "Cadastrado com sucesso",
    "Usuário cadastrado com sucesso!",
    "success",
    3000,
    null
  );

  form.value = {
    nome: "",
    cargo: "",
    email: "",
    status: false,
    equipes: [],
  };
};
</script>

<style scoped>
.container-form {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #525252;
}

.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
