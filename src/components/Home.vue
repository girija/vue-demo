<template>
  <v-layout align-center justify-center  class="mt-5">
    <v-flex xs12 sm8 md8>
      <v-card class="elevation-12">
        <v-toolbar dark color="red">
          <v-toolbar-title>Form Inputs List</v-toolbar-title>
        </v-toolbar>
<v-simple-table fixed-header
    height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            UID
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Email
          </th>
          <th class="text-left">
            Age
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in allData"
          :key="item.uid"
        >
          <td>{{ item.uid }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
   </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'FormList',
  props: {
    msg: String
  },
  data: () => ({
        allData:[],
  }),
  beforeCreate(){
        this.axios.get("http://localhost:3000/form/").then((response) => {
        this.allData = response.data.data
        })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
