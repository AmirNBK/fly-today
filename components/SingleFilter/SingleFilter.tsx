import React, { useState, useEffect } from 'react';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { SingleFilterProps } from '@/types/types';
import { useRouter } from 'next/navigation';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { useAppContext } from '@/context/AppContext';

const SingleFilter: React.FC<SingleFilterProps> = ({ filterName, options, isCheckboxFilter, isRangeFilter, urlName }) => {
    const { isFilterReset } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);
    const [range, setRange] = useState<[number, number]>([20000, 5000000]);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const selected = params.get(urlName)?.split(',') || [];
        setSelectedOptions(selected);
    }, [urlName]);


    useEffect(() => {
        setSelectedOptions([])
    }, [isFilterReset])


    const onFilterOptionsChange = (e: CheckboxChangeEvent) => {
        const value = e.value;
        setSelectedOptions(prevOptions => {
            const newSelectedOptions = e.checked
                ? [...prevOptions, value]
                : prevOptions.filter(option => option !== value);

            const params = new URLSearchParams(window.location.search);
            if (newSelectedOptions.length === 0) {
                params.delete(urlName);
            } else {
                params.set(urlName, newSelectedOptions.join(','));
            }

            router.push(`?${params.toString()}`);
            return newSelectedOptions;
        });
    };

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-t border-#eee py-2">
            <button
                onClick={toggleAccordion}
                className="w-full px-4 py-2 text-gray-800 font-semibold rounded-t-lg focus:outline-none flex justify-between items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
                <span className='text-sm'>{filterName}</span>
            </button>
            <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? `max-h-96 ${isRangeFilter && 'py-12 px-6'}` : 'max-h-0'}`}
            >
                {isCheckboxFilter &&
                    <div className="p-4 space-y-2 flex flex-col gap-2">
                        {options.map(option => (
                            <div key={option.value} className="flex items-center rtl gap-4">
                                <Checkbox
                                    inputId={option.value}
                                    name="options"
                                    value={option.value}
                                    onChange={onFilterOptionsChange}
                                    checked={selectedOptions.includes(option.value)}
                                />
                                <label htmlFor={option.value} className="ml-2 cursor-pointer text-sm">
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                }
                {isRangeFilter &&
                    <>
                        <Slider value={range} onChange={(e: SliderChangeEvent) => setRange(e.value as [number, number])} className="w-14rem" range
                            max={10000000} min={0}
                        />
                        <div className='flex flex-row justify-between w-full mt-6'>
                            <p className='rtl'>{range[0].toLocaleString()} تومان</p>
                            <p className='rtl'>{range[1].toLocaleString()} تومان</p>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default SingleFilter;
