function toggled(){
  let toggle = document.getElementById('toggle')
  if (toggle.className === 'sidebar navbar-nav'){
    toggle.className = 'sidebar navbar-nav toggled'
  } else{
    toggle.className = 'sidebar navbar-nav'
  }
}
