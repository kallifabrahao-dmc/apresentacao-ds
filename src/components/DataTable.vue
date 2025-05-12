<template>
  <ce-data-table
    :headers="headers"
    :items="paginatedItems"
    search
    selectable
    striped
  >
    <template #status="{ item }">
      <span
        class="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 0"
        :class="
          item.status === 'Inativo'
            ? 'bg-red-100 text-red-800'
            : 'text-green-80'
        "
      >
        {{ item.status }}
      </span>
    </template>

    <template #teams="{ item }">
      <div class="flex space-x-1">
        <span
          v-for="team in item.teams"
          :key="team"
          class="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
        >
          {{ team }}
        </span>
      </div>
    </template>

    <template #actionsBtn>
      <button class="mr-2">
        <CeSvgIcon :name="pen" size="15" />
      </button>
      <button class="mr-2">
        <CeSvgIcon :name="trash01" size="15" />
      </button>
    </template>

    <template #title>Usuários</template>

    <template #groupButton>
      <div
        class="flex sm:flex-col sm:mb-2 space-x-2 sm:space-x-0 sm:space-y-2 w-auto sm:w-full"
      >
        <button class="bg-blue-500 p-3 rounded-lg text-white w-28 sm:w-full">
          Enviar
        </button>
        <button class="bg-red-500 p-3 rounded-lg text-white w-28 sm:w-full">
          Excluir
        </button>
      </div>
    </template>

    <template #pagination>
      <ce-pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @update:modelValue="updatePage"
      />
    </template>
  </ce-data-table>
</template>

<script setup lang="ts">
import {
  CeDataTable,
  CePagination,
  CeSvgIcon,
} from "@comercti/vue-components-hmg";
import { useDefault } from "../useDefault";
import { pen, trash01 } from "@comercti/icons-hmg";
const { headers, paginatedItems, totalPages, currentPage, updatePage } =
  useDefault();
</script>
