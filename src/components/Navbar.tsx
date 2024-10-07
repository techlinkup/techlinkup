import { useState, useEffect, useRef } from 'react';
import { Link } from "react-scroll";
import Logo from ".././assets/Logotipo-h.svg";

const Navigation = [
  {name: "Home", href: "hero"},
  // {name: "About Us", href: "about"},
  {name: "Services", href: "services"},
  {name: "Industries", href: "industries"},
  {name: "Contact ", href: "contacts"},
]

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeBg();
    window.addEventListener('scroll', changeBg);

    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('scroll', changeBg);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`${scroll || isOpen ? 'bg-black !border-none' : 'bg-transparent'} w-full fixed z-50 border-b-zinc-600 border-b-2 transition-all duration-700`}
    >
      <div
        className="max-w-5xl w-full flex flex-wrap justify-between items-center mx-auto p-4"
        ref={menuRef}
      >
        <div
          className="font-bold text-white"
        >
          <svg 
            width="395.99999999999994" 
            height="193.2632909738124" 
            viewBox="0 0 168 81.99048707979921" 
            className="looka-1j8o68f" 
            style={{
              width: '110px',
              height: 'auto'
            }}
          >
            <defs id="SvgjsDefs6840"><linearGradient id="SvgjsLinearGradient6845"><stop id="SvgjsStop6846" stop-color="#006838" offset="0"></stop><stop id="SvgjsStop6847" stop-color="#96cf24" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient6848"><stop id="SvgjsStop6849" stop-color="#006838" offset="0"></stop><stop id="SvgjsStop6850" stop-color="#96cf24" offset="1"></stop></linearGradient></defs><g id="SvgjsG6841" featurekey="1p4tPl-0" transform="matrix(0.19701568173570597,0,0,0.19701568173570597,-1.3808828787140248,15.59980957470566)" fill="url(#SvgjsLinearGradient6845)"><g xmlns="http://www.w3.org/2000/svg"><polygon points="248.189,155.77 57.009,155.77 94.009,192.77 285.189,192.77  "></polygon><polygon points="107.009,205.77 144.009,242.77 335.199,242.77 298.199,205.77  "></polygon><polygon points="614.765,105.77 614.414,105.77 564.685,105.77 433.372,237.074 302.059,105.77 252.329,105.77 251.979,105.77    7.009,105.77 44.009,142.77 288.979,142.77 433.099,286.89 433.372,286.617 433.645,286.89 577.765,142.77 822.733,142.77    859.733,105.77  "></polygon><polygon points="581.554,192.77 772.733,192.77 809.733,155.77 618.554,155.77  "></polygon><polygon points="531.544,242.77 722.733,242.77 759.733,205.77 568.544,205.77  "></polygon><path d="M325.302,71.599c0,29.897,24.322,54.22,54.218,54.22c11.13,0,21.702-3.305,30.772-9.589l23.017,24.114l23.415-24.529   c9.124,6.472,20.14,10.004,31.362,10.004c29.897,0,54.221-24.323,54.221-54.22c0-12.127-4.07-23.857-11.521-33.372l29.705-31.12   c0,0-94.786,22.387-127.176,30.714C401.203,29.566,306.14,7.107,306.14,7.107l30.245,31.689   C329.217,48.207,325.302,59.736,325.302,71.599z M515.371,54.375c3.237,5.127,4.988,11.115,4.988,17.223   c0,17.798-14.478,32.278-32.273,32.278c-5.669,0-11.112-1.445-15.949-4.208L515.371,54.375z M351.854,55.003l42.964,45.015   c-4.682,2.534-9.9,3.858-15.298,3.858c-17.794,0-32.271-14.48-32.271-32.278C347.249,65.667,348.831,60.001,351.854,55.003z"></path></g></g><g id="SvgjsG6842" featurekey="dYASrj-0" transform="matrix(0.49860805631353566,0,0,0.49860805631353566,24.000000237754847,72.0183250025091)" fill="url(#SvgjsLinearGradient6848)"><path d="M0 10.66 l0 -4.68 l15.3 0 l0 4.68 l-3.76 0 l0 -1.56 l2.2 0 l0 -1.56 l-12.18 0 l0 1.56 l5.32 0 l-0.02 9.34 l1.56 0 l0 -9.34 l1.56 0 l0 10.9 l-4.68 0 l0 -9.34 l-5.3 0 z M41.53 5.98 l0 4.68 l-10.62 0 l0 1.56 l7.88 0 l0 1.56 l-9.44 0 l0 -4.68 l10.62 0 l0 -1.56 l-12.18 0 l0 10.9 l12.18 0 l0 -1.56 l-10.62 0 l0 -1.56 l12.18 0 l0 4.68 l-15.3 0 l0 -14.02 l15.3 0 z M67.76 5.98 l0 4.7 l-8.6 0 c-1.18 0.1 -2.08 1.12 -2.08 2.32 s0.9 2.18 2.08 2.32 l5.48 0 l0 1.56 l-5.48 0 c-2.02 -0.16 -3.62 -1.82 -3.62 -3.9 c0 -2 1.54 -3.7 3.54 -3.86 l7.12 0 l0 -1.58 l-7.04 0 l0 0.02 c-2.86 0.16 -5.14 2.52 -5.14 5.44 c0 2.9 2.28 5.28 5.14 5.44 l7.04 0 l0 -3.12 l1.56 0 l0 4.68 l-8.6 0 c-3.74 -0.16 -6.7 -3.24 -6.7 -7 c0 -3.78 2.96 -6.84 6.7 -7 z M89.31000000000002 10.66 l0 -4.68 l4.68 0 l0 14.02 l-4.68 0 l0 -4.66 l-9.06 0 l0 3.1 l1.56 0 l0 -1.56 l1.56 0 l0 3.12 l-4.68 0 l0 -6.24 l12.2 0 l0 4.68 l1.54 0 l0 -10.9 l-1.54 0 l0 4.68 l-9.08 0 l0 -4.68 l-1.56 0 l0 4.68 l-1.56 0 l0 -6.24 l4.68 0 l0 4.68 l5.94 0 z M106.48000000000002 7.539999999999999 l0 7.78 l13.82 0 l0 4.68 l-15.38 0 l0 -1.56 l13.84 0 l0 -1.56 l-13.84 0 l0 -10.9 l4.68 0 l0 7.8 l-1.56 0 l0 -6.24 l-1.56 0 z M135.91000000000003 20 l-4.68 0 l0 -14.02 l4.68 0 l0 10.9 l-1.56 0 l0 -9.34 l-1.56 0 l0 10.9 l3.12 0 l0 1.56 z M157.46000000000004 12.84 l0 -6.86 l4.68 0 l0 14.02 l-4.68 0 l-7.5 -8.68 l0 -2.4 l8.22 9.52 l2.4 0 l0 -10.9 l-1.56 0 l0 9.5 l-8.22 -9.5 l-2.4 0 l0 10.9 l1.56 0 l0 -4.72 l1.56 1.8 l0 4.48 l-4.68 0 l0 -14.02 l4.68 0 z M180.77000000000004 15.16 l1.14 -1.06 l6.42 5.9 l-6.9 0 l-5.24 -4.8 l8.12 -7.66 l-2.26 0 l-5.86 5.66 l0 -5.66 l-1.56 0 l0 10.9 l2.76 0 l1.72 1.56 l-6.04 0 l0 -14.02 l4.68 0 l0 3.44 l3.68 -3.44 l6.82 0 l-9.78 9.2 l3.56 3.26 l2.3 0 z M214.44000000000005 5.98 l0 6.44 c0 4.16 -3.4 7.58 -7.6 7.58 c-4.12 0 -7.42 -3.24 -7.58 -7.32 l0 -6.7 l4.58 0 l0 6.44 c0 1.66 1.34 3 3 3 s2.94 -1.3 3 -2.92 l0 -6.52 l1.52 0 l0 6.44 c0 2.48 -2.02 4.52 -4.52 4.52 c-2.46 0 -4.5 -2 -4.5 -4.48 l-0.02 0 l0 -4.94 l-1.5 0 l0 5 c0.06 3.28 2.74 5.92 6.02 5.92 c3.34 0 6.02 -2.7 6.02 -6.02 l0 -6.44 l1.58 0 z  M225.37000000000006 5.98 l11.42 0 c2.14 0 3.88 1.74 3.88 3.9 c0 2.14 -1.74 3.9 -3.88 3.9 l-9.86 -0.02 l0 4.68 l1.56 0 l0 -3.12 l1.54 0 l0 4.68 l-4.66 0 l0 -7.8 l11.42 0.02 c1.28 0 2.32 -1.06 2.32 -2.34 c0 -1.3 -1.04 -2.34 -2.32 -2.34 l-9.86 0 l0 1.56 l9.86 0 c0.4 0.02 0.74 0.36 0.74 0.78 s-0.32 0.76 -0.78 0.78 l-0.02 0 l-11.36 0 l0 -4.68 z"></path></g>
          </svg>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0 cursor-pointer`}
        >
          {Navigation.map((item, i) => (
            <Link
              className="block lg:inline-block mt-4 lg:mt-0 lg:ml-6 text-base font-semibold text-gray-100 hover:text-yellowLogo transition-all"
              key={i}
              to={item.href}
              spy={true} smooth={true} offset={-100} duration={1000}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar