import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'fas fa-flag',
        route: '/countries',
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'fas fa-cog',
        route: '/settings',
        submenu: null
    }    

]