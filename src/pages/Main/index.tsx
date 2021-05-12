import React, { useEffect, useState } from 'react';
import { Container, NewPostButton } from './styles';

import PetAdvertisement from '../../components/Cards/PetAdvertisement';
import FilterBar from '../../components/FilterBar';

import { useFilters } from '../../hooks/filters';

import catalog from '../../utils/catalog';

import { AiOutlinePlus } from 'react-icons/ai';

interface IAdvertProps {
    authorName: string;
    authorImage: string;
    contactNumber: string;
    announcementDate: string;
    isLiked: boolean;
    inYourContacts: boolean;
    petInfos: {
        category: string;
        name: string;
        desctiption: string;
        images: IPetAdvertimentImagesProps[];
    };
}

interface IPetAdvertimentImagesProps {
    source: string;
}

function Main(){
    const [ adverts, setAdverts ] = useState<IAdvertProps[] | null>(null);
    
    const { selectedFiltersOptions } = useFilters();

    useEffect(() => {
        (() => {
            if(selectedFiltersOptions.length !== 0){
                const newArray: IAdvertProps[] = [];

                catalog.forEach((item: IAdvertProps) => {
                    const advertCategoryExistsInSelectedFiltersOptions = selectedFiltersOptions.some(option => option.category === item.petInfos.category);

                    if(advertCategoryExistsInSelectedFiltersOptions){
                        newArray.push(item);
                    }
                })
                setAdverts(newArray);
                
            }else {
                setAdverts(catalog);
            }
        })();
    }, [selectedFiltersOptions])

    return(
        <Container>
            <FilterBar />

            <main>
                { adverts?.map((item: IAdvertProps, index: number) => (
                    <PetAdvertisement key={ index } data={ item } />
                ))}
            </main>
            
            <NewPostButton to="/">
                <AiOutlinePlus size={ 30 } color="#fff" />
            </NewPostButton>
        </Container>
    )
}

export default Main;