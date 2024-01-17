import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

//context
export const Context = createContext()

//component with props
 export const AppComponent = (props) => {
    const [loading , setLoading] = useState(false)
    const [searchResults , setsearchResults] = useState(false)
    const [selecteCategories , setSelecteCategories] = useState(false)
    const [mobileMenu , setMobileMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCategoryData(selecteCategories)
    } ,[selecteCategories])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`)
        // return Promise
        //contents he console madhe data distoy teva to naav yeto mhanun res chya badli contents ghetla
        //contenst la destructre kelay 
        .then(({contents}) => {
            //console.log(res)
            setsearchResults(contents)
            setLoading(false)
        })
    }

    return(
        <Context.Provider value={{
            loading,setLoading ,searchResults ,setsearchResults,selecteCategories,setSelecteCategories,mobileMenu,setMobileMenu}}>
                {props.children}
            </Context.Provider>
    )
}

