<script setup lang="ts">
/**
 * @file Event card component.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import { computed, toRefs } from 'vue';

/**
 * @description Get formatted date from a given date object.
 *
 * @param   { Date }   date - Date from which to get the formatted date.
 *
 * @returns { string }      - Formatted date.
 */
const getCroppedDate = (date: Date): string => {
  const day = date.toLocaleDateString('fr', { weekday: 'short' }).toUpperCase();
  const dayNumber = date.getDate();
  const month = date.toLocaleDateString('fr', { month: 'short' }).toUpperCase();

  return `${day} ${dayNumber} ${month.slice(0, 3)}${
    month.length > 3 ? '.' : ''
  }`;
};

const props = withDefaults(
  defineProps<{
    event: CalendarEvent | null;
    primary: void | string;
    primaryLighten: undefined | string;
  }>(),
  {
    primary: 'primary',
    primaryLighten: 'primaryLighten',
  },
);

const { event, primary, primaryLighten } = toRefs(props);

const eventStartDateVerbose = computed(() =>
  event.value ? getCroppedDate(new Date(event.value.begin_at)) : null,
);

const eventEndDateVerbose = computed(() =>
  event.value ? getCroppedDate(new Date(event.value.end_at)) : null,
);

const eventStartDateISO = computed(() =>
  event.value
    ? new Date(event.value.begin_at).toISOString().replaceAll(/[:.-]/g, '')
    : null,
);

const eventEndDateISO = computed(() =>
  event.value
    ? new Date(event.value.end_at).toISOString().replaceAll(/[:.-]/g, '')
    : null,
);

const addEventToCalendarLink = computed(() => {
  if (!event.value) return '';

  const {
    title,
    description,
    webinarUrl,
    _embedded: { address },
  } = event.value;

  const actionUrl = `action=TEMPLATE`;
  const trpUrl = `trp=true`;
  const textUrl = `text=${title}`;
  const detailsUrl = `details=${description}%3Cbr%2F%3E---%3Cbr%2F%3E%3Ca%20href%3D%22${webinarUrl}%22%3ERejoindre%20le%20webinaire%3C%2Fa%3E`;
  const locationUrl = `location=${address.address}%20${address.address_2}%20${address.city}%20${address.zip}`;
  const datesUrl = `dates=${eventStartDateISO.value}/${eventEndDateISO.value}`;

  const paramsUrl = `${actionUrl}&${textUrl}&${detailsUrl}&${locationUrl}&${trpUrl}&${datesUrl}`;

  return `http://www.google.com/calendar/render?${paramsUrl}`;
});
</script>

<template>
  <v-card
    width="100%"
    :loading="event == null"
    class="event-card elevation-4 rounded-lg d-flex flex-wrap justify-space-between"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        :color="primary || 'primary'"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-container :fluid="true" class="pa-0">
      <v-row :no-gutters="true" class="flex-wrap-reverse fill-height">
        <v-col
          class="event-card-content me-auto pa-4 d-flex flex-column align-start flex-shrink-0 flex-grow-1"
          v-if="event !== null"
        >
          <v-card-title class="event-card-title pa-0 font-weight-bold">
            {{ event.title }}
          </v-card-title>
          <v-chip
            :color="primaryLighten || 'primary-lighten'"
            class="event-card-date mt-5 font-weight-black text-uppercase d-block py-1"
            size="x-small"
            :href="addEventToCalendarLink"
            target="_blank"
            rel="noopener noreferrer"
            label
          >
            {{ eventStartDateVerbose }} - {{ eventEndDateVerbose }}
          </v-chip>

          <v-card-text
            class="event-card-description mt-5 pa-0 font-weight-bold flex-grow-0"
          >
            <p
              v-snip="{
                lines: 4,
                mode: 'js',
                midWord: false,
              }"
            >
              {{ event.description }}
            </p>
          </v-card-text>

          <v-chip
            :href="`https://www.google.com/maps/search/?api=1&query=${event._embedded.address.address}%20${event._embedded.address.city}`"
            target="_blank"
            rel="noopener noreferrer"
            :ripple="false"
            link
            class="event-card-location d-flex align-center px-0 mt-2 pr-2"
            variant="text"
            size="small"
            color="grey"
          >
            <template v-slot:prepend>
              <v-icon
                icon="mdi-map-marker-outline"
                :color="primary || 'primary'"
                class="mr-2"
              />
            </template>
            {{ event._embedded.address.zip }}
            {{ event._embedded.address.city }}
          </v-chip>
          <v-chip
            class="event-card-webinar d-flex align-center px-0 pr-2"
            variant="text"
            size="small"
            color="grey"
            v-if="event.is_webinar"
          >
            <template v-slot:prepend>
              <v-icon
                icon="mdi-video-outline"
                :color="primary || 'primary'"
                class="mr-2"
              />
            </template>
            Disponible en ligne
          </v-chip>

          <v-card-actions class="mt-auto px-0">
            <v-btn
              class="px-4 text-none text-white"
              variant="flat"
              :color="primary || 'primary'"
              rounded="xl"
              :href="event.web_url"
            >
              En savoir plus
            </v-btn>
          </v-card-actions>
        </v-col>
        <v-col class="event-card-cover-container pa-0 flex-grow-0">
          <img
            class="event-card-cover-image"
            v-if="event !== null"
            :src="event.cover"
            :alt="event.title"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style>
.v-card {
  max-width: 980px;
}

.event-card-cover-container {
  width: 564px !important;
  height: 320px;
  position: relative;
  flex-basis: auto !important;
}

.event-card-cover-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}

.event-card-content {
  max-width: 564px;
}

.v-chip {
  outline: none;
}

/* stylelint-disable selector-class-pattern */
.v-chip:hover > .v-chip__overlay,
.v-chip:focus > .v-chip__overlay {
  opacity: 0 !important;
}
/* stylelint-enable selector-class-pattern */

.v-chip:focus {
  outline: 0.1px solid #eee;
}

@media (max-width: 820px) {
  .v-card {
    max-width: 500px;
  }

  .v-row {
    flex-flow: column-reverse nowrap;
  }

  /* keep image aspect-ratio */
  .v-col.event-card-cover-container {
    width: 100%;
    height: auto;
    padding-top: 57% !important;
  }

  .v-col.event-card-content {
    max-width: none;
  }

  .v-card-actions {
    align-self: flex-end;
  }
}
</style>
