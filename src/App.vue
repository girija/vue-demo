<template>
  <v-app>
    <!-- Start of Navigation -->
    <nav>
      <!-- Start of app toolbar -->
      <v-toolbar app  color="red">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase"
          >Vuetify Demo</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/" exact>Home</v-btn>
          <v-btn flat to="/my-form">Form</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <!-- End of app toolbar -->

      <!-- Start of mobile side menu -->
      <v-navigation-drawer app v-model="drawer" left>
        <!-- Menu title -->
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">Menu</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <!-- Menu Links -->
        <v-list>
          <v-list-tile to="/" exact>           
          </v-list-tile>
          <v-list-tile to="/my-form">
            
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <!-- End of mobile side menu -->
    </nav>
    <!-- End of Navigation -->

    <v-content>
      <!-- Display view pages here based on route -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: false }),
}
</script>