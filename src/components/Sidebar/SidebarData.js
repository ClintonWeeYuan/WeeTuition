import React from 'react'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Overview',
        route: 'overview',
        path: '/overview',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />

    },

    {
        title: '1: Algebra',
        route: 'CH1',
        path: '/ch1',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Linear Equations',
                page: 'CH1S1',
                path: '/ch1/s1'
            },

            {
                title: 'Simultaneous Equations',
                page: 'CH1S2',
                path: '/ch1/s2'
            },

            {
                title: 'Quadratic Equations',
                page: 'CH1S3',
                path: '/ch1/s3'
            }
        ]
    },

    {
        title: '2: Trigonometry',
        page: 'CH2',
        path: '/ch2',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Distance between Two Lines',
                page: 'CH2S1',
                path: '/ch2/s1'
            },

            {
                title: 'Perpendicular Distance',
                page: 'CH2S2',
                path: '/ch2/s2'
            },

            {
                title: 'Equation of Line',
                page: 'CH2S3',
                path: '/ch2/s3'
            },
        ]
    },

    {
        title: '3: Calculus ',
        page: 'CH3',
        path: '/ch3',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Differentiation',
                page: 'CH3S1',
                path: '/ch3/s1'
            },

            {
                title: 'Integration',
                page: 'CH3S2',
                path: '/ch3/s2'
            },

            {
                title: 'Volumes with Integration',
                path: '/ch3/s3'
            }
        ]
    },

    {
        title: '4: Statistics ',
        page: 'CH4',
        path: '/ch4',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Probabilities',
                page: 'CH4S1',
                path: '/ch4/s1'
            },

            {
                title: 'Venn Diagram',
                page: 'CH4S2',
                path: '/ch4/s2'
            },

            {
                title: 'Coolio Stuffs',
                page: 'CH4S3',
                path: '/ch4/s3'
            }
        ]
    },
];

