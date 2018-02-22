import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'fas fa-tachometer-alt',        
        route: 'authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'fas fa-flag',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'USA',
                        icon: 'fas fa-flag',
                        route: 'authenticated/country-detail/USA',
                        submenu: null
                    },
                    {
                        text: 'India',
                        icon: 'fas fa-flag',
                        route: 'authenticated/country-detail/India',
                        submenu: null
                    },
                    {
                        text: 'Switzerland',
                        icon: 'fas fa-flag',
                        route: 'authenticated/country-detail/Switzerland',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'fas fa-flag',
                route: 'authenticated/country-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'fas fa-flag',
                route: 'authenticated/country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'fas fa-flag',
                route: 'authenticated/country-list/0',
                submenu: null
            }
        ],
    },
    {
        text: 'Maintenance',
        icon: 'fas fa-cog',
        route: null,
        submenu: [
            {
                text: 'Country List',
                icon: 'glyphicon-th-list',
                route: 'authenticated/country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'authenticated/settings',
                submenu: null
            }
        ]
    }
];