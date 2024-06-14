import React from 'react'
import SubPageLayout from '../../layouts/SubPageLayout'
import { useParams } from 'react-router-dom'

function SearchPage() {
    const {searchQuery} = useParams();

  return (
    <SubPageLayout title="SEARCH" query={searchQuery} />
  )
}

export default SearchPage