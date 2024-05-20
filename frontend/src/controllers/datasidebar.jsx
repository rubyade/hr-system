import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaDashcube,
  FaGripHorizontal,
  FaPowerOff,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'Attendance',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'Payroll',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'Leave',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'Projects',
    icon: <FaGripHorizontal />,
  },
  {
    id: 6,
    url: '/documents',
    text: 'Departments',
    icon: <FaDashcube />,
  },
  {
    id: 7,
    url: '/documents',
    text: 'Employees',
    icon: <FaWpforms />,
  },
  {
    id: 8,
    url: '/logout',
    text: 'Logout',
    icon: <FaPowerOff />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
];
