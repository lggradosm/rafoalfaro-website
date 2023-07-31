import loadingGif from "/images/loading.gif";
export default function Loading({ children, loadCondition, className }) {
  if (loadCondition)
    return <div className={`animate-loadOpacity ${className}`}>{children}</div>;
  else
    return (
      <div className={className}>
        <div
          className={`bg-black absolute top-0   w-full h-full flex justify-center items-center
      } `}
        >
          <img
            src={loadingGif}
            alt="loading gif rafo alfaro  "
            className="w-[10rem] "
          />
        </div>
      </div>
    );
}
