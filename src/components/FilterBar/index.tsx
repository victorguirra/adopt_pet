import React from 'react';
import { Container } from './styles';

import { useFilters } from '../../hooks/filters';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function FilterBar(){
    const { 
        filterOptions, 
        selectedFiltersOptions, 
        setSelectedFiltersOptions,
        handleControlFilters 
} = useFilters();

    return(
        <Container>
            <div>
                { filterOptions?.map(item => {
                    const alreadySelected = selectedFiltersOptions.some(option => option.title === item.title);

                    return(
                        <button 
                            key={ item.title } 
                            className={ !alreadySelected ? 'notSelectedOption' : 'selectedOption' }
                            onClick={ () => handleControlFilters(item.title, item.category) }
                        >
                            { item.title }
                            { !alreadySelected
                                ? <AiOutlinePlus size={ 20 } color="#FFF" />
                                : <AiOutlineMinus size={ 20 } color="#FFF" />
                            }
                        </button>
                    )
                })}
            </div>

            <button onClick={ () => setSelectedFiltersOptions([]) }>
                Limpar Filtros
            </button>
        </Container>
    )
}

export default FilterBar;