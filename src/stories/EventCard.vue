<script lang="ts" setup>
/**
 * @file Home Page component story preview.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import EventCard from '@/components/EventCard.vue';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    /**
     * @description Vuetify primary color used in theme.
     */
    primaryColorTheme: string;

    /**
     * @description Vuetify primary lighten color used in theme.
     */
    primaryLightenColorTheme: string;

    /**
     * @description Event's name.
     */
    title: string;

    /**
     * @description Event's description.
     */
    description: string;

    /**
     * @description Event's webinar url.
     */
    webinarUrl: string;

    /**
     * @description Date when the event start.
     */
    begin_at: string;

    /**
     * @description Date when the event end.
     */
    end_at: string;
    /**
     * @description URL of the event's cover.
     */
    cover: string;

    /**
     * @description Address of the event location.
     */
    _embedded_address_address: string;

    /**
     * @description Complementary address of the event location.
     */
    _embedded_address_address_2: string;

    /**
     * @description City of the event location.
     */
    _embedded_address_city: string;

    /**
     * @description Zip code of the event location.
     */
    _embedded_address_zip: string;

    /**
     * @description Wether the event is a webinar.
     */
    is_webinar: boolean;

    /**
     * @description  Url of the event.
     */
    web_url: string;
  }>(),
  {
    primaryColorTheme: '#9b2fae',
    primaryLightenColorTheme: '#b86ac3',
    title: 'Occurrence title',
    description: 'Occurrence description',
    webinarUrl: 'https://www.alumnforce.com',
    begin_at: '2020-03-15 17:10:00',
    end_at: '2020-03-15 17:10:00',
    cover: 'https://placehold.co/600x400',
    _embedded_address_address: '5 Rue Marguerite de Rochechouart',
    _embedded_address_address_2: '',
    _embedded_address_city: 'Paris',
    _embedded_address_zip: '75009',
    is_webinar: true,
    web_url: 'https://website.com/foo/bar',
  },
);

const event = computed(() => ({
  ...props,
  id: '123',
  website: 'https://www.alumnforce.com',
  created: '2020-03-15 17:10:00',
  updated: '2020-03-15 17:10:00',
  thumbnail: 'https://placehold.co/600x400',
  _embedded: {
    address: {
      /* eslint-disable no-underscore-dangle */
      address: props._embedded_address_address,
      address_2: props._embedded_address_address_2,
      city: props._embedded_address_city,
      zip: props._embedded_address_zip,
      /* eslint-enable no-underscore-dangle */
      venue: 'Exhibition center',
      country_iso: 'FR',
      latitude: '48.877013',
      longitude: '2.345189',
    },
    author: {
      id: '123',
      name: 'John Doe',
      email: 'john.doe@alumnforce.com',
      avatar: {
        user_id: '123',
        display_name: 'John Smith III',
        profile_photo: 'https://cdn-af.example.net/medias/profile/XXXXX.png',
        color: '#AB120F',
        initials: 'JS',
        _links: {
          self: {
            href: 'string',
          },
        },
      },
      _links: {
        self: {
          href: 'string',
        },
      },
    },
    status: {
      id: 1,
      name: 'occurrence_is_waiting_for_validation',
      label: 'En attente de validation',
      _links: {
        self: {
          href: 'string',
        },
      },
    },
    category: {
      id: '123',
      name: "{'en': 'Evenings'}",
    },
    groups: {
      id: '123',
      name: 'Contractors',
      description: 'Group for contractors users',
      _links: {
        self: {
          href: 'string',
        },
      },
    },
  },
  is_on_site: true,
  seat_available: '5',
  replay_link: 'https://redirect.com',
  _links: {
    self: {
      href: 'string',
    },
  },
}));
</script>

<template>
  <event-card
    :event="event"
    :primary="props.primaryColorTheme"
    :primaryLighten="props.primaryLightenColorTheme"
  />
</template>
