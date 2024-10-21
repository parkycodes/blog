function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.976.975 1.248 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.976-2.242 1.248-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.976-.975-1.248-2.242-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.976 2.242-1.248 3.608-1.31 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.014 7.053.072 5.773.13 4.638.393 3.686 1.345 2.735 2.297 2.472 3.432 2.414 4.712.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.947.058 1.28.321 2.415 1.273 3.367.952.952 2.087 1.215 3.367 1.273 1.279.058 1.688.072 4.947.072 3.259 0 3.668-.014 4.947-.072 1.28-.058 2.415-.321 3.367-1.273.952-.952 1.215-2.087 1.273-3.367.058-1.279.072-1.688.072-4.947 0-3.259-.014-3.668-.072-4.947-.058-1.28-.321-2.415-1.273-3.367-.952-.952-2.087-1.215-3.367-1.273C15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 0 0 12 5.838zm0 10.124A3.962 3.962 0 1 1 12 8.038a3.962 3.962 0 0 1 0 7.924zm6.406-11.96a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/parker-zhang-047487307/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/parkycodes"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/parkerzhng/profilecard/?igsh=bnZ2aHE5dzg1bmQ="
          >
            <InstagramIcon />
            <p className="ml-2 h-7">Instagram</p>
          </a>
        </li>
      </ul>
      
    </footer>
  )
}
