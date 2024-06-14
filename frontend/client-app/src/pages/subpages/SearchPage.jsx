import React, {useEffect, useState} from 'react'
import SubPageLayout from '../../layouts/SubPageLayout'
import { useParams } from 'react-router-dom'

function SearchPage() {
    const {searchQuery} = useParams();
    
  return (
    <SubPageLayout title="RESULTS" query={searchQuery} />
  )
}

export default SearchPage