<template>
  <div id="wrapper">
    <div id="main">
      <slot />
    </div>
  </div>
</template>

<style lang="css" scoped>
#wrapper {
  min-height: 100vh;
}

#main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
}
</style>
