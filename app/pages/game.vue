<template>
  <div>
    <div>Текущий ход: {{ isWhiteTurn ? 'Крестики' : 'Нолики' }}</div>

    <div v-if="!!isWinCombination">
      Игра закончена
      <button @click="restart">
        restart
      </button>
    </div>

    <div
      id="field"
      class="mx-auto"
    >
      <template
        v-for="row, y in field"
        :key="y"
      >
        <div
          v-for="item, x in row"
          :key="x"
          class="flex flex-center cursor-pointer"
          :style="{
            color: isWinPoint(x, y) ? 'green' : 'black',
          }"
          @click="makeMove(x, y)"
        >
          {{ item }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const availableWinCombinations: Array<Array<{
  x: number
  y: number
}>> = [
  Array.from({ length: 3 }, (_v, x) => ({
    x,
    y: x,
  })),
  Array.from({ length: 3 }, (_v, x) => ({
    x,
    y: 2 - x,
  })),
  ...Array.from({ length: 3 }, (_v, x) => Array.from({ length: 3 }, (_v, y) => ({
    x,
    y,
  }))),
  ...Array.from({ length: 3 }, (_v, y) => Array.from({ length: 3 }, (_v, x) => ({
    x,
    y,
  }))),
]

const getCleanField = () => Array.from({ length: 3 }, () => Array(3).fill(null))

const field = ref<Array<Array<'x' | 'o' | null>>>(getCleanField())

const currentTurnNumber = ref(0)

const isWhiteTurn = computed(() => currentTurnNumber.value % 2 === 0)

const isWinCombination = computed(() => {
  return availableWinCombinations.find((comb) => {
    const value = field.value[comb[0]!.y]![comb[0]!.x]!

    if (!value) return false

    return comb.every(pos => field.value[pos.y]![pos.x]! === value)
  })
})

const makeMove = (x: number, y: number) => {
  if (field.value[y]![x]) return

  field.value[y]![x] = isWhiteTurn.value ? 'x' : 'o'

  currentTurnNumber.value++
}
const restart = () => {
  field.value = getCleanField()

  currentTurnNumber.value = 0
}

const isWinPoint = (x: number, y: number) => {
  return isWinCombination.value?.some(point => point.x === x && point.y === y)
  // if (!isWin.value) return false
//
  // return isWin.value.some(point => point.x === x && point.y === y)
}
</script>

<style lang="scss" scoped>
#field {
  --item-size: 8rem;
  --gutter: 0.5rem;

  display: grid;
  grid-template-rows: repeat(3, var(--item-size));
  grid-template-columns: repeat(3, var(--item-size));
  gap: var(--gutter);
  width: 100%;
  max-width: calc(3 * var(--item-size) + 4 * var(--gutter));
  padding: var(--gutter);

  div {
    font-size: 80px;
    font-weight: 300;
    color: black;
    background-color: #555;

    &:nth-of-type(2n+1) {
      background-color: #999;
    }
  }
}
</style>
