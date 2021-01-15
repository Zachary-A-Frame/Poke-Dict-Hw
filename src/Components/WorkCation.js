import React from "react";


export default class WorkCation extends React.Component {
  render() {
    return (
      <div className="bg-indigo-500">
        <div className="bg-gray-100 flex">
          <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl  lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
            <div className="xl:max-w-lg xl:ml-auto">
              <img
                className="h-10"
                src={require("../images/logo.svg").default}
                alt="logo"
              />
              <img
                className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
                src={require("../images/beach-work.jpg").default}
                alt="Woman working on beach"
              />
              <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl">
                You can work from anywhere.
               <br className="hidden lg:inline" />
                <span className="text-indigo-500">Take advantage of it.</span>
              </h1>
              <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
                Workcation helps you find work-friendly rentals in beautiful
                locations so you can enjoy some nice weather even when you're not
                on vacation.
             </p>
              <div className="mt-4 sm:mt-4">
                <a href="/" className="btn sm:text-base shadow-lg">
                  Book your escape
               </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 lg:relative">
            <img
              className="absolute inset-0 h-full w-full object-cover object-center"
              src={require("../images/beach-work.jpg").default}
              alt="Woman working on beach"
            />
          </div>
        </div>
      </div>
    )
  }
}
