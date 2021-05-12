import React, { useState, createContext, useContext, ReactNode } from 'react';

interface IFiltersContextData {
    filterOptions:IFilterOptions[];
    selectedFiltersOptions: IFilterOptions[] | [];
    setSelectedFiltersOptions: any;
    handleControlFilters: any;
}

interface IFiltersProviderData {
    children: ReactNode;
}

interface IFilterOptions {
    title: string;
    category: string;
}

const FiltersContext = createContext<IFiltersContextData>({} as IFiltersContextData);

function FiltersProvider({ children } : IFiltersProviderData){
    const filterOptions: IFilterOptions[] = [
        { title: 'Cachorro', category:'Dog' },
        { title: 'Gato', category:'Cat' },
        { title: 'Peixe', category:'Fish' }
    ];

    const [ selectedFiltersOptions, setSelectedFiltersOptions ] = useState<IFilterOptions[] | []>([]);

    function handleControlFilters(title: string, category: string){
        const alreadySelected = selectedFiltersOptions.some(item => item.title === title);
        
        if(!alreadySelected){
            setSelectedFiltersOptions(prevState => [...prevState, { title, category }]);
        }else {
            setSelectedFiltersOptions(selectedFiltersOptions.filter(item => item.title !== title));
        }
    }

    return(
        <FiltersContext.Provider value={{ 
                filterOptions, 
                selectedFiltersOptions, 
                setSelectedFiltersOptions,
                handleControlFilters
            }}
        >
            { children }
        </FiltersContext.Provider>
    )
}

function useFilters(): IFiltersContextData{
    const context = useContext(FiltersContext);

    return context;
}

export { FiltersProvider, useFilters };