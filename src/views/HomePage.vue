<script lang="ts" setup>
/**
 * @file Home Page.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import EventCard from '@/components/EventCard.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

store.dispatch('fetchEvent', '1').catch(() => {});
const event = computed(() => store.state.event);
</script>

<template>
  <event-card :event="event" />
</template>
