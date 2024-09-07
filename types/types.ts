export interface Sort {
    name: string;
    code: string;
}

export interface FilterOption {
    label: string;
    value: string;
}

export interface SingleFilterProps {
    filterName: string;
    options: FilterOption[];
}
