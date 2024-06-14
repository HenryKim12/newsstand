import React, {useEffect, useState} from 'react'
import SubPageLayout from '../../layouts/SubPageLayout'
import { useParams } from 'react-router-dom'

function SearchPage() {
    const {searchQuery} = useParams();
    // const [searchQuery, setSearchQuery] = useState("")

    // useEffect(() => {
    //     console.log("SEARCHING " + searchQuery)
    //     onRender()
    // }, [searchQuery])

    // const onRender = () => {
    //     setSearchQuery(query)
    // }

  return (
    <SubPageLayout title="RESULTS" query={searchQuery} />
  )
}

export default SearchPage