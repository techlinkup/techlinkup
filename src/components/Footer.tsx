const Footer = () => {
  return (
    <div className="w-full bg-greenLogo px-4 py-6 sm:py-4">
      <div className="max-w-5xl w-full mx-auto flex flex-col sm:flex-row justify-between items-center text-zinc-200 font-semibold text-center sm:text-left">
        <span className="mb-4 sm:mb-0 text-sm sm:text-base">
          &#169; Copyright 2024
        </span>
        <span className="text-sm sm:text-base">
          Developed by <a className="cursor-pointer hover:underline">Tech Linkup Solutions</a>
        </span>
      </div>
    </div>
  )
}

export { Footer };