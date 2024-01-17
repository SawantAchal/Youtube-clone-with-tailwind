import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

//context
export const Context = createContext()

//component with props
 export const AppComponent = (props) => {
    const [loading , setLoading] = useState(false)
    const [searchReults , setSearchReults] = useState(false)
    const [selecteCategories , setSelecteCategories] = useState(false)
    const [mobileMenu , setMobileMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCategoryData(selecteCategories)
    } ,[selecteCategories])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`)
        // return Promise
        .then((res) => {
            console.log(res)
            setSearchReults(res)
            setLoading(false)
        })
    }

    return(
        <Context.Provider value={{
            loading,setLoading ,searchReults ,setSearchReults,selecteCategories,setSelecteCategories,mobileMenu,setMobileMenu}}>
                {props.children}
            </Context.Provider>
    )
}

