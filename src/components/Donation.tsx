const Donation = () => {
  return (
    <div className="hidden lg:block h-fit min-w-fit card sticky top-2 border-2 border-primary text-center">
      <h2 className="font-bold uppercase border-b-2 border-primary font-mono text-base min-w-fit">
        Give me a hand
      </h2>
      <div className="w-full flex gap-2 justify-between mt-2">
        <div className="border-2 w-fit rounded p-2 cursor-pointer border-primary text-primary fill-primary hover:border-green-500 hover:fill-green-500 duration-300 ease-in-out transition-all ">
          <a
            href="https://www.buymeacoffee.com/juanemilio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              className="fill-inherit"
              viewBox="0 -960 960 960"
            >
              <path d="M440-240q-117 0-198.5-81.5T160-520v-240q0-33 23.5-56.5T240-840h500q58 0 99 41t41 99q0 58-41 99t-99 41h-20v40q0 117-81.5 198.5T440-240zM240-640h400v-120H240v120zm200 320q83 0 141.5-58.5T640-520v-40H240v40q0 83 58.5 141.5T440-320zm280-320h20q25 0 42.5-17.5T800-700q0-25-17.5-42.5T740-760h-20v120zM160-120v-80h640v80H160zm280-440z"></path>
            </svg>
          </a>
        </div>
        <div className="border-2 w-fit rounded p-2 cursor-pointer border-primary text-primary fill-primary hover:border-green-500 hover:fill-green-500 duration-300 ease-in-out transition-all ">
          <a
            href="https://matecito.co/JuanEmilio03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-lg decoration-transparent "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              version="1"
              viewBox="0 0 100 100"
              className="fill-inherit"
              xmlSpace="preserve"
            >
              <path d="M70 15L70 10 53.333 10 53.333 15 50 20 73.333 20z"></path>
              <path d="M85 35v5h-5V26.666a3.343 3.343 0 00-3.333-3.332H46.666a3.343 3.343 0 00-3.332 3.332v16.668h3.604l2.386 7.154C52.995 53.994 55 58.503 55 63.333c0 6.494-3.398 12.621-9.078 16.696.43 1.536.998 2.907 1.691 4.05l.721 1.194V90h28.333A3.344 3.344 0 0080 86.667V73.333h5v5l5-1.666V36.666L85 35zm-23.333 8.334l-8.334-5 8.334-5 8.333 5-8.333 5zM80 68.333V45h5v23.333h-5z"></path>
              <path d="M50 63.333c0-3.912-1.908-7.447-5-10l-1.666-4.999H28.135l-1.533-5.73c.756-.992 1.117-2.271.768-3.57-.367-1.363-1.396-2.32-2.633-2.77C22.25 28.428 18.623 21.256 14.029 15L10 17.963c4.418 6.008 7.715 12.672 9.975 19.791-.682.971-.986 2.197-.654 3.438.348 1.299 1.299 2.227 2.451 2.705l1.188 4.438h-6.293L15 53.333c-3.09 2.553-5 6.088-5 10 0 6.055 3.883 11.335 9.678 14.255-.465 3.323-1.445 6.491-3.012 9.079V90h26.668v-3.333c-1.563-2.588-2.547-5.756-3.008-9.079C46.117 74.668 50 69.385 50 63.333z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donation;
