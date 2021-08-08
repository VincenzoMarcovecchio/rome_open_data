import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from '../../stores/meteo/meteoactions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'stores';
import { useEffect } from 'react';

export function fetchMeteo() {
    const dispatch = useDispatch();
    const meteo = useSelector((state: RootState) => state.meteo);

    useEffect(() => {

        async function  lol(){
        
        if (!meteo) {
            dispatch(fetchProductsPending());
           await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=41.8979&lon=14.4898&exclude=hourly,daily&units=metric&appid=22835791d76deb5492e4638d5dd1a34a')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                 console.log(res)
                dispatch(fetchProductsSuccess(res))
         
        })
        .catch(error => {
                    dispatch(fetchProductsError(error));
                })
        }
        return  meteo

        }
      lol()
      }, []);




}

