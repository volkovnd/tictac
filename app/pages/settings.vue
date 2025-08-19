<template>
  <div id="settings">
    <h1>Settings</h1>
  </div>
</template>

<style lang="scss" scoped>
#menu  {
  display: flex;
  align-items: center;
  height: 100vh;

  .nav {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 100%;
    max-width: 20rem;
    padding: 0.5rem;
    background-color: rgba(0,0,0,0.125);
    border-radius: 0.5rem;
  }

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
