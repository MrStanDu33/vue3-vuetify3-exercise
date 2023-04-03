<script lang="ts" setup></script>

<template>
  <v-app>
    <v-main>
      <v-theme-provider theme="high-contrast">
        <slot name="story"></slot>
      </v-theme-provider>
    </v-main>
  </v-app>
</template>

<style>
/* stylelint-disable-next-line selector-class-pattern */
.v-application > .v-application__wrap {
  min-height: auto;
}
</style>
