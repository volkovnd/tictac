<template>
  <div
    id="menu"
    class="nav flex column gap rounded"
  >
    <NuxtLink
      class="nav-link"
      :to="{ name: 'game' }"
    >
      New game
    </NuxtLink>

    <NuxtLink
      class="nav-link"
      :to="{ name: 'top-scores' }"
    >
      Top scores
    </NuxtLink>

    <NuxtLink
      class="nav-link"
      :to="{ name: 'settings' }"
    >
      Settings
    </NuxtLink>
  </div>
</template>

<style lang="scss">
#menu.nav {
  gap: 0.5rem;
  width: 100%;
  max-width: 20rem;
  padding: 0.5rem;
  background-color: rgba(0,0,0,0.125);
  border-radius: 0.5rem;

  .nav-link {
    display: block;
    padding: 0.5rem 1.25rem;
    font-weight: 500;
    text-align: center;
    background-color: rgba(0,0,0,0.25);
    border-radius: 0.5rem;
  }
}
</style>
