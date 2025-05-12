<script setup lang="ts">
import {
  CeLayout,
  CeMenuHeader,
  CeMenuSidebar,
  CeFooter,
  CeDataTable,
  CePagination,
  CeSvgIcon,
} from "@comercti/vue-components-hmg";
import { useDefault } from "./useDefault";
import { pen, trash01 } from "@comercti/icons-hmg";

const {
  items,
  itemsMenuMyService,
  menuAberto,
  paginaInicial,
  headers,
  paginatedItems,
  totalPages,
  currentPage,
  updatePage,
  abriMenu,
} = useDefault();
</script>

<template>
  <CeLayout layout="default" :openMenu="menuAberto">
    <template #header>
      <div class="h-full">
        <CeMenuHeader
          :items-menu-my-service="itemsMenuMyService"
          :items-menu="items"
        />
      </div>
    </template>

    <template #sidebar>
      <CeMenuSidebar
        @toggleMenu="abriMenu"
        :items="items"
        :is-home="paginaInicial"
        :is-search="true"
        @redirect="(route) => $router.push(route)"
      />
    </template>

    <template #content>
      <router-view />
    </template>

    <template #footer>
      <CeFooter variant="5" background="white" />
    </template>
  </CeLayout>
</template>
