import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

const useResetFilters = () => {
    const { setIsFilterReset } = useAppContext();
    const router = useRouter();

    const resetFilters = () => {
        setIsFilterReset((prev: any) => !prev);

        // Get the current URL search parameters
        const params = new URLSearchParams(window.location.search);

        // Create a list of parameters to retain
        const retainParams = ['departure', 'arrival' , 'sort'];

        // Filter out all parameters except the ones we want to retain
        const retainedParams = new URLSearchParams();
        retainParams.forEach(param => {
            const value = params.get(param);
            if (value) {
                retainedParams.set(param, value);
            }
        });

        const updatedUrl = `${window.location.pathname}?${retainedParams.toString()}`;

        router.push(updatedUrl);
    };

    return resetFilters;
};

export default useResetFilters;
