export function useRunStores() {
  const { data: runs, refresh } = useFetch('/api/training/runs')
  const { data: pins, refresh: refereshPins } = useFetch('/api/training/pins')
  const { data: projects, refresh: refereshProjects } = useFetch('/api/training/projects')

  async function addRun() {
    const res = await useFetch('/api/training/run', {
      method: 'POST',
      body: {},
    })
    refresh()
    return res.data
  }

  function removeRun(id: string) {
    useFetch('/api/training/run', {
      method: 'DELETE',
      body: {
        id,
      },
    }).then(() => {
      refresh()
      refereshPins()
    })
    return 0
  }

  function pinRun(id: string) {
    return useFetch('/api/training/pin', {
      method: 'POST',
      body: {
        id,
      },
    }).then(() => {
      refereshPins()
    })
  }

  function unpin(id: string) {
    return useFetch('/api/training/unpin', {
      method: 'POST',
      body: {
        id,
      },
    }).then(() => {
      refereshPins()
    })
  }

  async function onEdit(tabKey: any, action: any) {
    if (action === 'add') {
      const data = await addRun()
      pinRun(data.value)
      navigateTo(`/training/run/${data.value}`)
    }
    else {
      unpin(tabKey)
      navigateTo('/training/runs')
    }
  }

  async function removeProject(id: string) {
    useFetch('/api/training/project', {
      method: 'DELETE',
      body: {
        id,
      },
    }).then(() => {
      refereshProjects()
    })
  }

  async function addProject() {
    useFetch('/api/training/project', {
      method: 'POST',
      body: {},
    }).then(() => {
      refereshProjects()
    })
  }

  return {
    runsInTab: pins,
    pinRun,
    refereshPins,
    onEdit,
    addRun,
    removeRun,
    unpin,
    runs,
    projects,
    addProject,
    refereshProjects,
    removeProject,
  }
}
