<template>
  <v-app>
    <v-navigation-drawer
      v-if="loggedIn"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      width="290"
      fixed
      app
    >
      <v-list dense>
        <!-- INICIO -->
        <v-list-item :to="{ name: 'inicio' }" exact color="primary">
          <v-list-item-action>
            <v-icon style="width: 25px">fa-home</v-icon>
          </v-list-item-action>
          <v-list-item-title class="sidebarTitle"> Inicio </v-list-item-title>
        </v-list-item>

        <!-- DECANATOS -->
        <v-list-group value="true">
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title class="sidebarTitle">
                Decanatos
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Submenu Compras -->
          <v-list-item :to="{ name: 'marcaciones' }">
            <v-list-item-action>
              <v-icon style="width: 25px">fa-fingerprint</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="sidebarTitle">
                Marcaciones
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{ name: 'marcadores' }">
            <v-list-item-action>
              <v-icon style="width: 25px">fa-stopwatch</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="sidebarTitle">
                Marcadores
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="abrirManual()">
            <v-list-item-action>
              <v-icon style="width: 25px">fa-question-circle</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="sidebarTitle">
                Manual de usuario
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      style="
        box-shadow: inset 0 -7px 0 var(--v-secondary-base),
          0px 0px 8px 2px rgba(0, 0, 0, 0.4);
      "
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 400px">
        <v-layout>
          <div>
            <v-app-bar-nav-icon
              v-if="false"
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </div>
          <div>
            <v-img
              class="hidden-sm-and-down"
              src="@/assets/unicaes-transparent-500.png"
              style="padding-top: 5px"
              contain
              width="230"
            ></v-img>
          </div>
        </v-layout>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="false">
        <v-btn icon>
          <v-icon style="width: 25px">fa-user</v-icon>
        </v-btn>
        <strong>{{ user.nombre }}</strong>
      </div>
      <v-btn
        v-if="true"
        color="primary"
        depressed
        class="ml-4"
        @click="dialogLogIn = true"
      >
        INICIAR SESION
      </v-btn>
      <v-btn
        v-if="false"
        color="primary"
        depressed
        class="ml-4"
        @click="logOut()"
      >
        CERRAR SESION
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-main>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-actions class="primary justify-center">
          &copy;{{ new Date().getFullYear() }} —
          <strong> Sistema de gestión de trabajos de graduación.</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
/* ESTILO GLOBAL ENTRE COMPONENTES */
td {
  font-size: 14.5px !important;
}
/* Titulos de datatables */
.titulo {
  font-size: 16px !important;
  font-weight: 500;
}
.sidebarTitle {
  font-size: 15px !important;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
/* Titulos de dialogs de reportes */
.dialogsOptionTitlePrimary {
  font-size: 16px;
  color: var(--v-primary-base);
}
/* Bordes redondeados en maestros detalles */
.borderDetallesPrimary {
  background-color: white !important;
  border: 3px solid var(--v-primary-base) !important;
  border-radius: 15px !important;
  margin-top: 20px;
}
/* Label de periodo cerrados en contabilidad */
.periodoCerradoTitlePrimary {
  color: var(--v-primary-base) !important;
  font-size: 18px;
  float: left;
}
.colorPrimary {
  color: var(--v-primary-base) !important;
}
.smallForm {
  margin-bottom: -14px;
}
</style>
