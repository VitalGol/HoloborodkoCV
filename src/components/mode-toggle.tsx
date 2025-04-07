import * as React from 'react';
import { IoMoonOutline } from 'react-icons/io5';
import { GoSun } from 'react-icons/go';

export default function ModeToggle({
  theme,
  setTheme,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setTheme: any;
}) {
  return (
    <button
      className="cursor-pointer"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <GoSun color="#486ca7" size={24} />
      ) : (
        <IoMoonOutline color="#486ca7" size={22} />
      )}
    </button>
  );
}
