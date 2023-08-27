export function useRunStores() {
  const storeage = useLocalStorage<string[]>('fedmlllm-run-ids', [])

  function addRun(id: string) {
    if (storeage.value.includes(id))
      return // already in tab
    storeage.value.push(id)
  }

  function removeRun(id: string) {
    const idIndex = storeage.value.indexOf(id)
    storeage.value = storeage.value.filter(run => run !== id)
    return idIndex - 1
  }

  function onEdit(tabKey: any, action: any) {
    if (action === 'add') {
      const time = new Date().getTime()
      const newRun = `Untitled-${time}`
      addRun(newRun)
      navigateTo(`/training/run/${newRun}`)
    }
    else {
      const preIndex = removeRun(tabKey)
      if (preIndex >= 0)
        navigateTo(`/training/run/${storeage.value.at(preIndex)}`)
      else
        navigateTo('/training/runs')
    }
  }

  return {
    runsInTab: storeage,
    onEdit,
    addRun,
    removeRun,
  }
}
