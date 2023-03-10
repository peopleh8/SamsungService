const btnsOpen = document.querySelectorAll('.open-search'),
      btnsClose = document.querySelectorAll('.close-search'),
      searchPanels = document.querySelectorAll('.search-dropdown'),
      header = document.querySelector('.header')

export const searchOpen = () => {
  btnsOpen.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('hide')
      btn.previousElementSibling.classList.add('visible')
      btn.nextElementSibling.classList.add('open')
    })
  })
}

export const searchClose = () => {
  btnsClose.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.remove('visible')
      btn.nextElementSibling.classList.remove('hide')
      btn.nextElementSibling.nextElementSibling.classList.remove('open')
      
      btn.parentElement.previousElementSibling.classList.remove('visible')
      setTimeout(() => {
        header.classList.remove('search-open')
        btn.parentElement.classList.remove('search-open')
      }, 350)
    })
  })
}

export const clickSeachOutside = () => {
  window.addEventListener('click', e => {
    let target = e.target

    if ([...searchPanels].some(panel => panel.classList.contains('open') && !target.closest('.repair-item__search-inp-wrapper') && !target.closest('.search__inp-wrapper'))) {
      btnsClose.forEach(btn => btn.classList.remove('visible'))
      btnsOpen.forEach(btn => btn.classList.remove('hide'))
      searchPanels.forEach(panel => panel.classList.remove('open'))
      document.querySelector('.modal-search-section__items').classList.remove('hidden')
    }
  })
}

if (searchPanels && searchPanels.length !== 0) {
  clickSeachOutside()
  searchClose()
  searchOpen()
}