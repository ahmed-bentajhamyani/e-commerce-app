export default function Footer() {
  return (
    <footer className="w-screen flex flex-col bg-bg-secondary text-xl">
      <div className="flex flex-col max-sm:gap-8 sm:grid sm:grid-cols-3 max-sm:pb-5 p-5 mt-8 mb-6 mx-6 md:p-3 pt-4 max-sm:mx-auto">
        <div className="flex flex-col col-span-1 gap-4 sm:gap-1">
          <h2 className="sm:text-lg md:text-xl capitalize">Contact Us</h2>
          <p className="text-sm ">
            <span className="font-bold underline">Phone: </span>
            <span>+212 604598622</span>
          </p>
          <p className="text-sm ">
            <span className="font-bold underline">Email: </span>
            <span>ecomm.sqli@sqli.com</span>
          </p>
        </div>
        <div className="flex flex-col col-span-1 capitalize  gap-4 sm:gap-1">
          <h2 className="sm:text-lg md:text-xl capitalize">customer service</h2>
          <ul className="text-text-secondary text-sm  capitalize flex flex-col gap-1">
            <li>customer service</li>
            <li>general terms of sale</li>
            <li>payment</li>
            <li>shipment</li>
          </ul>
        </div>
        <div className="flex flex-col col-span-1  gap-4 sm:gap-1">
          <h2 className="sm:text-lg md:text-xl capitalize">About Us</h2>
          <ul className="text-text-secondary text-sm capitalize flex flex-col gap-1">
            <li>privacy</li>
            <li>the website</li>
            <li>coockie policy</li>
            <li>careers</li>
          </ul>
        </div>
      </div>
      <div className="text-white bg-primary text-center py-6 text-base">
        Copyright &copy;{new Date().getFullYear()}
      </div>
    </footer>
  );
}
