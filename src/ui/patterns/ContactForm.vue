<template>
    <b-card>
        <b-form-group
            id="input-group-name"
            label="Nombre"
            label-for="input-name"
            :invalid-feedback="feedback.name"
            :state="state.name"
        >
            <b-form-input
              id="input-name"
              v-model="form.name"
              :state="state.name"
              trim
            />
        </b-form-group>

        <b-form-group
            id="input-group-email"
            label="Correo electrónico"
            label-for="input-email"
            :invalid-feedback="feedback.email"
            :state="state.email"
        >
            <b-form-input
              id="input-email"
              type="email"
              v-model="form.email"
              :state="state.email"
              trim
            />
        </b-form-group>

        <b-form-group
            id="input-group-text"
            label="Comentario"
            label-for="input-text"
            :invalid-feedback="feedback.text"
            :state="state.text"
        >
            <b-form-textarea
                id="input-text"
                placeholder="Aquí puedes contarme lo que quieras"
                rows="3"
                no-resize
            />
        </b-form-group>

        <b-button
          variant="primary"
          class="mt-3"

          @click="submit"
        >
            Enviar
        </b-button>
    </b-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
      return {
          form: {
              name: '',
              email: '',
              text: ''
          },
          state: {
              name: null,
              email: null,
              text: null
          },
          feedback: {
            name: null,
            email: null,
            text: null 
          }
      }
  },

  watch: {
      'form.name' () {
          this.state.name = null
          this.feedback.name = null
      },
      'form.email' () {
          this.state.email = null
          this.feedback.email = null
      },
      'form.text' () {
          this.state.text = null
          this.feedback.text = null
      },
  },

  methods: {
      submit () : void {

      }
  }
})
</script>

<style>

</style>