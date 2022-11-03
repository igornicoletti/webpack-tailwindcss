import './index.css'

$(($) => {
  console.log('[jQuery] DOM is fully loaded!')
  const classes = (...classes) => classes.filter().join(' ')
})
