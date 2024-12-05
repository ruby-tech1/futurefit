const HomeTest = ({ text, children, test }) => {
  return (
    <div className='bg-grey-200 p-4 flex flex-row justify-between items-center'>
      <div className='flex flex-row gap-x-4 items-center'>
        {children}
        <p>{text}</p>
      </div>
      {test && (
        <button className='text-orange bg-orange bg-opacity-20 p-1 text-xs'>
          Take Test
        </button>
      )}
    </div>
  );
};

export default HomeTest;
