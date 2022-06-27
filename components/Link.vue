<template>
  <a
      v-if="url.startsWith('http')"
      :href="url"
      itemscope
      itemtype="https://schema.org/SiteNavigationElement"
      target="_blank"
      rel="noopener"
    >
      <slot>{{ name }}</slot>
    </a>
    <NuxtLink
      v-else
      :to="url"
      itemscope
      itemtype="https://schema.org/SiteNavigationElement"
    >
      <slot>{{ name }}</slot>
    </NuxtLink>
</template>

<script>
export default {
  props: {
    url: { type: String, default: null },
    name: { type: String, default: null },
  },
};
</script>
