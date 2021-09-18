import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Calculadora',
        path: '/calculadora',
        icon: <FaIcons.FaCalculator />
    },
    {
        title: 'Graficas',
        path: '/graficas',
        icon: <FaIcons.FaReact />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Lineal',
                path: '/graficas/graficalineal',
                icon: <FaIcons.FaChartArea />
            },
            {
                title: 'Torta',
                path: '/graficas/graficatorta',
                icon: <FaIcons.FaChartPie />
            },
            {
                title: 'Histograma',
                path: '/graficas/graficahistograma',
                icon: <FaIcons.FaChartBar />
            }
        ]

    }
];
