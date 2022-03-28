<template>
  <div>

    <b-container>
      <b-row class="hero-header">
        <b-col cols="12" lg="6">
          <h1>Manuel Lorenzo</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt porro ad atque modi labore adipisci dicta, aut quidem nihil eius, molestiae molestias quis, reiciendis eos quam quos fuga sint!
          </p>

          <b-button variant="primary">
            Contacto
          </b-button>
        </b-col>

        <b-col cols="12" lg="6" class="text-center">
          <img src="/img/me.png" alt="">
        </b-col>
      </b-row>

      <!-- Sobre mi -->
      <b-row>

      </b-row>

      <!-- Tecnologías -->
      <b-row>
        <b-col cols="12" lg="6">
          <h3>Tecnologías</h3>
          <p>
            A lo largo de mi carrerar he tenido la fortuna de experimentar con distintas tecnologías en mayor o menor medida
          </p>
        </b-col>

        <b-col cols="12" lg="6">
          <div class="d-flex flex-wrap">
            <TechnologyCard
              v-for="tech in technologies"
              :key="tech.name"
              :img-src="tech.imgSrc"
              :href="tech.href"
              class="m-3"
            />
          </div>

        </b-col>

      </b-row>

      <!-- Proyectos -->
      <b-row class="mt-5">
        <b-col cols="12">
          <h3>Proyectos</h3>
          <p>
            A continuación puedes ver una selección de proyectos en los que he trabajado
          </p>
        </b-col>
        <b-col
          v-for="(project, index) in projects"
          :key="project.name"
          cols="12"
          class="text-primary pb-3"
          style="transition: all .4s"
          :data-aos="index % 2 ? 'fade-left' : 'fade-right'"
        >
          <div
            class="card shadow border-0 overflow-hidden"
          >
          <div class="d-flex flex-column flex-lg-row">
            <div style="flex: 1;">
              <img class="w-100" style="height: 300px; object-fit: cover;" :src="project.imgSrc" :alt="project.name">
            </div>
            <div class="d-flex flex-column p-3" style="flex: 1;">
              <h3>{{ project.name }}</h3>
              <p style="flex: 1;">{{ project.shortDescription }}</p>

              <b-button variant="primary" @click="project.expanded = !project.expanded">Saber más</b-button>
            </div>
          </div>

          <b-collapse v-model="project.expanded" class="p-3">
            <h5>Participación</h5>
            <ul>
              <li v-for="task in project.tasks" :key="task">
                {{ task }}
              </li>
            </ul>
            <h5>Tecnologías</h5>
            <div class="px-4">
              <b-badge
                v-for="tech in project.technologies"
                :key="tech"
                class="py-2 px-3 mr-2 mb-1"
              >
                  {{ tech }}
              </b-badge>
            </div>
          </b-collapse>
          </div>
        </b-col>
        <b-col cols="12" class="text-center">
          <NuxtLink
            class="btn btn-primary"
            :to="{ name: 'projects' }"
          >
            ¡Ver todos!
          </NuxtLink>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col cols="12" lg="6" data-aos="fade-right">
          <h3>Contacto</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque a nihil facilis fugiat voluptatum, nulla dolore quod id harum molestias eos enim explicabo recusandae nisi reiciendis, ipsam natus quia odit?
          </p>
        </b-col>

        <b-col cols="12" lg="6" data-aos="fade-left">
          <ContactForm />
        </b-col>
      </b-row>

    </b-container>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      technologies: [
        {
          name: 'Vue',
          imgSrc: '/img/logos/vue_logo.png',
          href: "https://vuejs.org/"
        },
        {
          name: 'Swift',
          imgSrc: '/img/logos/swift_logo.png',
          href: "https://developer.apple.com/swift/"
        },
        {
          name: 'Android',
          imgSrc: '/img/logos/android_logo.jpg',
          href: "https://www.android.com/intl/es_es/what-is-android/"
        }
      ],

      projects: [
        {
          name: 'CyberAcademy+',
          imgSrc: '/img/projects/avios_for_business.jpeg',
          shortDescription: 'Plataforma de aprendizaje de ciberseguridad usada por profesionales de todo el mundo para aumentar sus conocimientos y mejorar su habilidades',
          expanded: false,
          tasks: [
            'Lead developer del frontend'
          ],
          technologies: [
            'VueJS'
          ]
        },
        {
          name: 'YaaY',
          imgSrc: '/img/projects/yaay_logo.png',
          shortDescription: 'Plataforma enfocada al pequeño y mediano comercio, que permite otorgar Avios a los clientes por sus compras. Con el paso del tiempo la plataforma ha ido creciendo e incorporando nuevos partners, como Endesa o El Corte Inglés. Desde que se lanzó la plataforma, lleva otorgados más de 40 millones de Avios',
          expanded: false,
          tasks: [
            'Lead developer del frontend'
          ],
          technologies: [
            'VueJS'
          ]
        },
        {
          name: 'Avios for business',
          imgSrc: '/img/projects/avios_for_business.jpeg',
          shortDescription: 'Plataforma enfocada al pequeño y mediano comercio, que permite otorgar Avios a los clientes por sus compras. Con el paso del tiempo la plataforma ha ido creciendo e incorporando nuevos partners, como Endesa o El Corte Inglés. Desde que se lanzó la plataforma, lleva otorgados más de 40 millones de Avios',
          expanded: false,
          tasks: [
            'Realicé las aplicaciones para Android e IOS',
            'Mantenimiento y mejoras de la web (frontend y backend) una vez se entregó el MVP',
            'Integraciones a medida con partners específicos (El Corte Inglés, Endesa, PPM)',
            'Automatización del proceso de distribución de las aplicaciones mediante Fastlane',
            'Migración a un nuevo entorno en AWS, generando la infraestructura mediante terraforming scripts'
          ],
          technologies: [
            'AngularJS',
            'DynamoDB',
            'Terraforming'
          ]
        },
        {
          name: 'Get Active With Avios',
          imgSrc: '/img/projects/gawa.jpg',
          shortDescription: 'Plataforma de gamificación para promover el deporte entre los miembros de la compañía, integrada con Strava para el registro de actividades',
          expanded: false,
          tasks: [
            'Diseño de la arquitectura y base de datos',
            'Fases iniciales del desarrollo, tanto frontend como backend',
            'Puesta en marcha del proceso de CI/CD en TeamCity'
          ],
          technologies: [
            'VueJS',
            'DynamoDB'
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>

.hero-header {
  height: 60vh;
  align-items: center;
}

</style>
