const Navbar = ({ modalAction }) => {
  return (
    <div className="border w-[100vw] flex justify-between p-4">
      <button className="bg-[#2563eb] p-2 rounded-md text-white font-semibold">
        Home
      </button>
      <button
        onClick={modalAction}
        className="bg-[#2563eb] p-2 rounded-md text-white font-semibold"
      >
        Create Form
      </button>
    </div>
  );
};

export default Navbar;
