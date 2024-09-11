import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

const useResetFilters = () => {
    const { setSelectedOptions } = useAppContext();
    const router = useRouter();

    const resetFilters = () => {
        setSelectedOptions([]);

        // Reset the URL by removing all query parameters
        const params = new URLSearchParams(window.location.search);
        
        params.forEach((_, key) => {
            params.delete(key);
        });

        router.push(window.location.pathname);
    };

    return resetFilters;
};

export default useResetFilters;
