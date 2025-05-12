import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import DataTable from "../components/DataTable.vue";
import Formulario from "../components/Formulario.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "DataTable",
    component: DataTable,
  },
  {
    path: "/formulario",
    name: "Formulario",
    component: Formulario,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
