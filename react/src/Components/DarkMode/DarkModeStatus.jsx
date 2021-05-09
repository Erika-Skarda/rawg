import useDarkMode from 'use-dark-mode';

export default function  DarkModeStatus () {
  const { value } = useDarkMode(false);

  return value ? 'Dark Mode' : 'Light Mode';
};
