export default defineNuxtPlugin(()=>{

    const colormode = useStatefulCookie('D_COLOR_MODE')

    if(!colormode.value){
    // TODO: detect system color mode
    colormode.value = 'dark'
    }

    const isDarkMode = computed(() => colormode.value === 'dark')

    const toggleColorMode = () => {
        colormode.value = isDarkMode.value ? 'light' : 'dark'
    }

    return {
        provide:{
            colormode:{
                isDarkMode,
                toggleColorMode
            }
        }
    }
})