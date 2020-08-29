const dynamicNav = () => {
    const $nav = document.querySelector("#nav")
    const navHeight = $nav.clientHeight

    document.addEventListener('scroll', () => {
        if(document.body.scrollTop >= navHeight || document.documentElement.scrollTop >= navHeight){
            $nav.classList.remove('navbar-transparent')
        } else {
            $nav.classList.add('navbar-transparent')
        }
    })

}

export { dynamicNav as default }