const icons = {
  interactive: (
    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" fill="currentColor" />
  ),
  video: (
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" fill="currentColor" />
  ),
  podcast: (
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.21-1.79 4-4 4s-4-1.79-4-4H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="currentColor" />
  ),
  mindmap: (
    <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z" fill="currentColor" />
  ),
  ai: (
    <path d="M21 10.5c.83 0 1.5-.67 1.5-1.5S21.83 7.5 21 7.5 19.5 8.17 19.5 9s.67 1.5 1.5 1.5zm-3 4.5c.83 0 1.5-.67 1.5-1.5S18.83 12 18 12s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-5-9C13.83 6 13 6.67 13 7.5S13.83 9 14.5 9 16 8.33 16 7.5 15.17 6 14.5 6zm-5 9c.83 0 1.5-.67 1.5-1.5S10.33 12 9.5 12 8 12.67 8 13.5 8.67 15 9.5 15zm-3 4.5c.83 0 1.5-.67 1.5-1.5S7.33 15 6.5 15 5 15.67 5 16.5 5.67 18 6.5 18zm12-9c.83 0 1.5-.67 1.5-1.5S19.33 6 18.5 6 17 6.67 17 7.5 17.67 9 18.5 9zM12 3C8.69 3 6 5.69 6 9c0 2.12 1.07 3.98 2.69 5.08L9 17.5c.55.55 1.45.55 2 0l.31-3.42C12.93 12.98 14 11.12 14 9c0-3.31-2.69-6-6-6z" fill="currentColor" />
  ),
}

export function ModuleIcon({ type, className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[type]}
    </svg>
  )
}
