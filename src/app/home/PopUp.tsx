export const PopUp: React.FC<{
  show: boolean;
  id: string;
  heading: string;
  message: string;
  closeCallback: Function;
}> = ({ show, id, heading, message, closeCallback }) => {
  const showPopUp = () => {
    const popup = document.querySelector(`#${id}`) as HTMLElement;
    if (!popup) return;
    popup.classList.remove("opacity-0");
    popup.classList.remove("invisible");
  };

  const hidePopUp = () => {
    const popup = document.querySelector(`#${id}`) as HTMLElement;
    if (!popup) return;
    popup.classList.add("opacity-0");
  };

  const handleTransitionEnd = () => {
    const popup = document.querySelector(`#${id}`) as HTMLElement;
    if (!popup) return;
    if (popup.classList.contains("opacity-0")) {
      popup.classList.add("invisible");
    }
  };

  if (show) showPopUp();
  else hidePopUp();

  return (
    <section
      id={id}
      onTransitionEnd={handleTransitionEnd}
      className={
        "fixed z-50 top-0 h-screen w-screen bg-slate-800 bg-opacity-50 flex justify-center items-center transition duration-300 "
      }
    >
      <div className="fixed top-[35vh] w-96 h-80 bg-white rounded-2xl flex flex-col border-blue-accent border-2">
        <button
          className="h-20 m-4 mb-8 w-fit"
          onClick={() => {
            closeCallback();
            hidePopUp();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="rgb(71 85 105)"
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"
            />
          </svg>
        </button>
        <div className="h-full w-full flex flex-col justify-center items-center pb-24 text-center gap-5">
          <h3 className="text-sky-600 font-semibold text-2xl">{heading}</h3>
          <p className="text-lg px-10">{message}</p>
        </div>
      </div>
    </section>
  );
};
