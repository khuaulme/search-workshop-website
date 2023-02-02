import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const ListBox = ({ choice, setChoice, choices, data }) => {
  const [selected, setSelected] = useState(choices[0]);

  useEffect(() => {
    setChoice(selected.dataType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full text-xl mb-4 py-4 pl-6 pr-10 text-center bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block text-xl text-gray-800">
              {selected.dataString}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400 text-xl"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute border-4 border-forestgreen z-10 w-full py-1 overflow-auto text-base bg-white text-gray-800 rounded-md shadow-lg max-h-80 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {choices.map((string, stringIdx) => (
                <Listbox.Option
                  key={stringIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-xl text-black bg-yellow-200"
                        : "text-gray-900 text-xl"
                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={string}
                >
                  {({ selected, active }) => (
                    <div>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block `}
                      >
                        {string.dataString}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListBox;
