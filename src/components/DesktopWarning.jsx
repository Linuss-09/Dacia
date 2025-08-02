import React from 'react'

function DesktopWarning() {
  return (
    <>
        <div className="lg:hidden  flex flex-col justify-center items-center h-screen bg-gray-700 p-4">
        {/* main body kinda div./ */}
            <h2 className="text-2xl font-bold mb-2 text-gray-200">Desktop Only</h2>
            <p className="text-gray-300 mb-1">
                This site is designed for a desktop experience. 
            </p>
            <p className="text-gray-300">
                Please switch to a larger screen to view the content.
            </p>

        </div>    
    </>


  )
}

export default DesktopWarning