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
    url: '/admin/dashboard',
    text: 'dashboard',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/admin/team',
    text: 'Attendance',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/admin/workrecords',
    text: 'Work Records',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/admin/leaverecords',
    text: 'Leaves',
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
    url: '/admin/users',
    text: 'Employees',
    icon: <FaDashcube />,
  },
  {
    id: 7,
    url: '/admin/workreport',
    text: 'Work Report',
    icon: <FaWpforms />,
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
