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
      <div className="flex gap-2">
        <button
          className="border-[1px] h-10 rounded-lg text-ce_medium_gray w-28 sm:w-full"
        >
          Baixar
        </button>
        <button
          className="bg-ce_green rounded-lg text-white w-28 sm:w-full h-10"
        >
          Upload
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
