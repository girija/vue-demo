<template>
  <v-layout align-center justify-center  class="mt-5">
    <v-flex xs12 sm8 md6>
      <v-card class="elevation-12">
        <v-toolbar dark color="red">
          <v-toolbar-title>Demo Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="formEl.name"
      :counter="30"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="formEl.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="formEl.age"
      type="number"
      minimum=25
      maximum=95
      :rules="ageRules"
      label="Age"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    
  </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
        color="error"
        class="mr-4"
        @click="reset"
        >
        Reset
        </v-btn>
          <v-btn  
          color="success"
          class="mr-4"
          :disabled="!checkbox"
          @click="saveInfo"
          >
          Save
          </v-btn>
        </v-card-actions>
      </v-card>      
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
        formEl:{
            name: '',
            email: '',
            age: '',
        },
      valid: true,      
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters',
      ],      
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],      
      ageRules: [
        v => !!v || 'Age is required',
        v => (v && parseInt(v) > 20 ) || 'Age must be greater than 20',
      ],
      checkbox: false,
    }),    
    methods: {
      saveInfo() {
        this.$refs.form.validate()
        this.axios.post("http://localhost:3000/form/save",this.formEl).then((response) => {
            console.log(response)
            if(response.data.status == "success"){
                this.reset()
                this.$router.push('/')
            }        
        })
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>